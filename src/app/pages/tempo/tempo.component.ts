import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TempoService } from './service/tempo.service';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TempoChartInterface, TempoResponseInterface } from './interfaces/tempo.interface';
import { ChartModule } from 'primeng/chart';

interface FilterSelectorInterface {
  label: string;
  value: string;
}

@Component({
  selector: 'app-tempo',
  imports: [SelectModule, ReactiveFormsModule, TableModule, ChartModule],
  providers: [TempoService],
  templateUrl: './tempo.component.html',
  styleUrl: './tempo.component.scss'
})
export class TempoComponent implements OnInit, OnDestroy {

  yearsOptions: number[] = [];
  eventOptions: FilterSelectorInterface[] = [];
  sessionOptions: FilterSelectorInterface[] = [];
  // TODO: participants: create new table with participants per season??
  categoryOptions: FilterSelectorInterface[] = [];
  participantOptions: string[] = [];

  // tempoTable: TempoResponseInterface[] = [];
  tempoTable = signal<TempoResponseInterface[]>([]);
  tempoChart = signal<TempoChartInterface>({
    datasets: [],
    labels: []
  });

  filtersForm = new FormGroup({
    year: new FormControl(),
    event: new FormControl({ value: '', disabled: true }),
    session: new FormControl({ value: '', disabled: true }),
    category: new FormControl({ value: '', disabled: true }),
    participant: new FormControl({ value: '', disabled: true })
  })

  private tempoService = inject(TempoService);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.tempoService.getAllYears().pipe(
      takeUntil(this.destroy$)
    ).subscribe(years => this.yearsOptions = years);
    // this.prepareFormSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChangeYear() {
    const year = this.filtersForm.controls.year.value;
    this.tempoService.getEventByYear(year).pipe(
      takeUntil(this.destroy$)
    ).subscribe(events => {
      this.eventOptions = events.map(event => {
        return {
          label: event.eventName,
          value: event.eventId
        }
      });
      this.filtersForm.controls.event.enable({ emitEvent: true });
    })
  }

  onChangeEvent() {
    const year = this.filtersForm.controls.year.value;
    const eventId = this.filtersForm.controls.event.value ?? '';
    forkJoin({
      sessions: this.tempoService.getDataByEvent(year, eventId, true),
      categories: this.tempoService.getDataByEvent(year, eventId, false)
    }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.sessionOptions = res.sessions.filter(session => session === 'r').map(session => {
        return {
          label: this.getSessionLabel(session),
          value: session
        }
      })
      this.categoryOptions = res.categories.map(category => {
        return {
          label: this.getCategoryLabel(category),
          value: category
        }
      });
      this.filtersForm.controls.session.enable({ emitEvent: true });
    });
  }

  onChangeSession() {
    this.filtersForm.controls.category.enable({ emitEvent: true });
  }

  onChangeCategory() {
    const year = this.filtersForm.controls.year.value;
    const eventId = this.filtersForm.controls.event.value ?? '';
    const category = this.filtersForm.controls.category.value ?? '';
    this.tempoService.getParticipantsByCategory(year, eventId, category).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.participantOptions = res;
      this.filtersForm.controls.participant.enable();
    })
  }

  onChangeParticipant() {
    const eventId = this.filtersForm.controls.event.value ?? '';
    const session = this.filtersForm.controls.session.value ?? '';
    const participant = this.filtersForm.controls.participant.value ?? '';
    this.tempoService.getTempo(eventId, session, participant).pipe(
      takeUntil(this.destroy$)
    ).subscribe(tempo => {
      this.tempoTable.set(tempo.sort((a,b) => a.lapNumber - b.lapNumber));
      this.tempoChart.set({
        labels: tempo.map(dataToLabel => `${dataToLabel.lapNumber}`),
        datasets: [
          {
            data: tempo.map(dataToDataset => dataToDataset.lapTime),
            borderColor: '#c2c2c2',
            fill: true,
            label: participant,
            tension: 0.4
          }
        ]
      })
    })
  }

  private getSessionLabel(session: string): string {
    if (session.includes('fp')) {
      return 'Practice ' + session.substring(2);
    }
    switch (session) {
      case 'q':
        return 'Qualifying';
      case 'hp':
        return 'Hyperpole';
      case 'r':
        return 'Race';
      default:
        return '';
    }
  }

  private getCategoryLabel(category: string): string {
    switch (category) {
      case 'h':
        return 'Hypercar';
      case 'lmgt3':
        return 'Le Mans GT3';
      default:
        return '';
    }
  }

}
