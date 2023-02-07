import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipmentLocationComponent } from './form-equipment-location.component';

describe('FormEquipmentLocationComponent', () => {
  let component: FormEquipmentLocationComponent;
  let fixture: ComponentFixture<FormEquipmentLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEquipmentLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEquipmentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
