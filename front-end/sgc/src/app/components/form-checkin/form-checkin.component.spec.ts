import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckinComponent } from './form-checkin.component';

describe('FormCheckinComponent', () => {
  let component: FormCheckinComponent;
  let fixture: ComponentFixture<FormCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
