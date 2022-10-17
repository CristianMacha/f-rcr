import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormEndService {
  private updateOption$: Subject<boolean>;
  private updateZone$: Subject<boolean>;

  constructor() {
    this.updateOption$ = new Subject();
    this.updateZone$ = new Subject();
  }

  getUpdateOption$() {
    return this.updateOption$.asObservable();
  }

  getUpdateZone$() {
    return this.updateZone$.asObservable();
  }

  emitUpdateOption() {
    this.updateOption$.next(true);
  }

  emitUpdateZone() {
    this.updateZone$.next(true);
  }
}
