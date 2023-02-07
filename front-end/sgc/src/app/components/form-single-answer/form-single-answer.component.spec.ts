import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSingleAnswerComponent } from './form-single-answer.component';

describe('FormSingleAnswerComponent', () => {
  let component: FormSingleAnswerComponent;
  let fixture: ComponentFixture<FormSingleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSingleAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
