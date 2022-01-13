import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBulmaAlertComponent } from './ngx-bulma-alert.component';

describe('NgxBulmaAlertComponent', () => {
  let component: NgxBulmaAlertComponent;
  let fixture: ComponentFixture<NgxBulmaAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBulmaAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBulmaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
