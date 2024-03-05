import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  showModal = new BehaviorSubject<boolean>(false);
  modalValue$ = this.showModal.asObservable();

  toggleModal(value: boolean) {
    this.showModal.next(value);
  }

  constructor() {}
}
