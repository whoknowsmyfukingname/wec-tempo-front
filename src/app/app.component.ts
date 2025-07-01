import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppService } from './app.service';
import { TempoComponent } from './pages/tempo/tempo.component';
import { MilestonesComponent } from './pages/milestones/milestones.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, TempoComponent, MilestonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'wec-tempo-front';
  private appService = inject(AppService);
  currentTab = signal('tempo');

  ngOnInit(): void {
    this.appService.tab$.subscribe(newTab => {
      this.currentTab.set(newTab);
    })
  }
}
