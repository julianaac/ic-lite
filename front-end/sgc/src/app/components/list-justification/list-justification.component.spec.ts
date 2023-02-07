import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJustificationComponent } from './list-justification.component';

describe('ListJustificationComponent', () => {
  let component: ListJustificationComponent;
  let fixture: ComponentFixture<ListJustificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJustificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
