import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeUserComponent } from './form-type-user.component';

describe('FormTypeUserComponent', () => {
  let component: FormTypeUserComponent;
  let fixture: ComponentFixture<FormTypeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTypeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
