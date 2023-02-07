import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClassroomComponent } from './form-classroom.component';

describe('FormClassroomComponent', () => {
  let component: FormClassroomComponent;
  let fixture: ComponentFixture<FormClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClassroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
