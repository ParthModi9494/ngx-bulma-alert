import { TestBed } from '@angular/core/testing';
import { NgxBulmaAlertService } from './ngx-bulma-alert.service';


describe('NgxBulmaAlertService', () => {
  let service: NgxBulmaAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBulmaAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
