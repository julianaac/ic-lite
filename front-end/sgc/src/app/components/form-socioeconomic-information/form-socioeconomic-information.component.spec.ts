import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSocioeconomicInformationComponent } from './form-socioeconomic-information.component';

describe('FormSocioeconomicInformationComponent', () => {
  let component: FormSocioeconomicInformationComponent;
  let fixture: ComponentFixture<FormSocioeconomicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSocioeconomicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSocioeconomicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
