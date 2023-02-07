import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskSprintComponent } from './form-task-sprint.component';

describe('FormTaskSprintComponent', () => {
  let component: FormTaskSprintComponent;
  let fixture: ComponentFixture<FormTaskSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTaskSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTaskSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
