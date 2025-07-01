import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _tab = new BehaviorSubject<'tempo' | 'milestones'>('tempo');
  tab$ = this._tab.asObservable();

  changeTab(tab: 'tempo' | 'milestones') {
    this._tab.next(tab);
  }
}
