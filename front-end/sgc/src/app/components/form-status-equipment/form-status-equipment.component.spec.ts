import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusEquipmentComponent } from './form-status-equipment.component';

describe('FormStatusEquipmentComponent', () => {
  let component: FormStatusEquipmentComponent;
  let fixture: ComponentFixture<FormStatusEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
