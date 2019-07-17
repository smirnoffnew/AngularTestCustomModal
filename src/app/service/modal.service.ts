import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: any[] = [];
  readonly initialState: any;

  constructor() {
    this.initialState = {
      isOpen: false,
      isConfirm: false
    };
  }

  initModal(id: string) {
    const $modal = new BehaviorSubject(this.initialState);
    this.modals.push({$element: $modal, id, isOpen: false});
  }

  toggleModal(id: string, isConfirmed: boolean): void {
    const modal = this.modals.filter(x => x.id === id)[0];
    modal.isOpen = !modal.isOpen;
    modal.$element.next({isOpen: modal.isOpen, isConfirm: isConfirmed});
  }

  getModalStatus(id: string) {
    return this.modals.filter(x => x.id === id)[0];
  }
}
