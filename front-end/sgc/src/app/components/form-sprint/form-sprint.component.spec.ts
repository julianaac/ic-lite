import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSprintComponent } from './form-sprint.component';

describe('FormSprintComponent', () => {
  let component: FormSprintComponent;
  let fixture: ComponentFixture<FormSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
