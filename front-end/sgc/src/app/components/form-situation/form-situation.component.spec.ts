import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSituationComponent } from './form-situation.component';

describe('FormSituationComponent', () => {
  let component: FormSituationComponent;
  let fixture: ComponentFixture<FormSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
