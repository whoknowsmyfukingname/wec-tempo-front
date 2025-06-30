import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EventResponseInterface, ParticipantsBodyInterface, SessionsCategoriesBodyInterface, TempoBodyInterface } from '../interfaces/filters.interface';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  private baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  getAllYears(): Observable<number[]> {
    const url: string = `${this.baseUrl}/filters/years`;
    return this.http.get<number[]>(url);
  }

  getEventByYear(year: number): Observable<EventResponseInterface[]> {
    const url: string = `${this.baseUrl}/filters/events`;
    return this.http.post<EventResponseInterface[]>(url, { year });
  }

  getDataByEvent(year: number, eventId: string, getSessions: boolean): Observable<string[]> {
    const url: string = `${this.baseUrl}/filters/${getSessions ? 'sessions' : 'categories'}`;
    const body: SessionsCategoriesBodyInterface = { year, eventId };
    return this.http.post<string[][]>(url, body).pipe(
      map(data => data.at(0) ?? [])
    );
  }

  getParticipantsByCategory(year: number, eventId: string, category: string): Observable<string[]> {
    const url: string = `${this.baseUrl}/filters/participants`;
    const body: ParticipantsBodyInterface = { year, eventId, category };
    return this.http.post<string[][]>(url, body).pipe(
      map(data => data.at(0) ?? [])
    )
  }

  getTempo(eventId: string, session: string, participant: string) {
    const url: string = `${this.baseUrl}/tempo/data`;
    const body: TempoBodyInterface = { eventId, participant, session };
    // TODO: response interface
    return this.http.post<any>(url, body)
  }
}
