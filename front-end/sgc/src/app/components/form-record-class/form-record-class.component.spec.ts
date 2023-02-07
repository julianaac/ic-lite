import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecordClassComponent } from './form-record-class.component';

describe('FormRecordClassComponent', () => {
  let component: FormRecordClassComponent;
  let fixture: ComponentFixture<FormRecordClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecordClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecordClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
