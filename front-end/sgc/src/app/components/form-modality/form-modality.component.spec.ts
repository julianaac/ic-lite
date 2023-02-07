import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalityComponent } from './form-modality.component';

describe('FormModalityComponent', () => {
  let component: FormModalityComponent;
  let fixture: ComponentFixture<FormModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
