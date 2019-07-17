import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../service/modal.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalForm;
  constructor(
    private modalService: ModalService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initModalForm();
  }

  toggleModal(id, isConfirmed) {
    this.modalService.toggleModal(id, isConfirmed);
  }

  getModalCondition(id) {
    return this.modalService.getModalStatus(id).$element;
  }

  initModalForm() {
    this.modalForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(0)]]
    });
  }

  showFormData(form, id) {
    this.toggleModal(id, true);
  }
}
