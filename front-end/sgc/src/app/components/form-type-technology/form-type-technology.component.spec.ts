import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeTechnologyComponent } from './form-type-technology.component';

describe('FormTypeTechnologyComponent', () => {
  let component: FormTypeTechnologyComponent;
  let fixture: ComponentFixture<FormTypeTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTypeTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTypeTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
