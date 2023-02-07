import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipamentLocationComponent } from './list-equipament-location.component';

describe('ListEquipamentLocationComponent', () => {
  let component: ListEquipamentLocationComponent;
  let fixture: ComponentFixture<ListEquipamentLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipamentLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEquipamentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
