import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });

  it('is modal after created has close status', () => {
    const service: ModalService = TestBed.get(ModalService);
    service.initModal('some_id');
    expect(service.getModalStatus('some_id').isOpen).toEqual(false);
  });

  it('is modal should be open by service', () => {
    const service: ModalService = TestBed.get(ModalService);
    service.initModal('some_id');
    service.toggleModal('some_id', false);
    expect(service.getModalStatus('some_id').isOpen).toEqual(true);
  });

  it('is modal should be not confirmed after init', () => {
    const service: ModalService = TestBed.get(ModalService);
    service.initModal('some_id');
    service.toggleModal('some_id', false);
    expect(service.getModalStatus('some_id').element).toEqual(false);
  });
});
