import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: any[] = [];
  private flag = false;
  private initialState: any;

  constructor() {
    this.initialState = {
      isOpen: false,
      isConfirm: false
    };
  }

  initModal(id: string) {
    const modal = new BehaviorSubject(this.initialState);
    this.modals.push({element: modal, id});
  }

  toggleModal(id: string, isConfirmed: boolean): void {
    const modal = this.modals.filter(x => x.id === id)[0];
    this.flag = !this.flag;
    modal.element.next({isOpen: this.flag, isConfirm: isConfirmed});
  }

  getModalStatus(id: string) {
    return this.modals.filter(x => x.id === id)[0];
  }
}
