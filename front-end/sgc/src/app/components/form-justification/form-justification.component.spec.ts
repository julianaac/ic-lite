import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJustificationComponent } from './form-justification.component';

describe('FormJustificationComponent', () => {
  let component: FormJustificationComponent;
  let fixture: ComponentFixture<FormJustificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormJustificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
