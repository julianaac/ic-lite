import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeTaskComponent } from './form-type-task.component';

describe('FormTypeTaskComponent', () => {
  let component: FormTypeTaskComponent;
  let fixture: ComponentFixture<FormTypeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTypeTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTypeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
