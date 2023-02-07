import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusEquipmentComponent } from './list-status-equipment.component';

describe('ListStatusEquipmentComponent', () => {
  let component: ListStatusEquipmentComponent;
  let fixture: ComponentFixture<ListStatusEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatusEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatusEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
