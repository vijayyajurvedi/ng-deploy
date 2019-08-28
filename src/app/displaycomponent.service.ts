import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaycomponentService {

  private messageSource = new BehaviorSubject<boolean>(true);

  currentmessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
}
