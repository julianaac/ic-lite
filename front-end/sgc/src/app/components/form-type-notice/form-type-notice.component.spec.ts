import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeNoticeComponent } from './form-type-notice.component';

describe('FormTypeNoticeComponent', () => {
  let component: FormTypeNoticeComponent;
  let fixture: ComponentFixture<FormTypeNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTypeNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTypeNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
