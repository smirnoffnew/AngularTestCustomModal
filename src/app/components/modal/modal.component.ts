import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  $unsubscribe = new Subject();
  @Input() id: string;
  modalStatus;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.initModal(this.id);
    this.modalStatus = this.modalService.getModalStatus(this.id);
  }

  closeModal() {
    this.modalService.toggleModal(this.id, false);
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next(true);
    this.$unsubscribe.unsubscribe();
  }
}
