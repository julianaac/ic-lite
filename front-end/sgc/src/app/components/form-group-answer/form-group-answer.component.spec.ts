import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupAnswerComponent } from './form-group-answer.component';

describe('FormGroupAnswerComponent', () => {
  let component: FormGroupAnswerComponent;
  let fixture: ComponentFixture<FormGroupAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
