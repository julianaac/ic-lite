import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoticeComponent } from './form-notice.component';

describe('FormNoticeComponent', () => {
  let component: FormNoticeComponent;
  let fixture: ComponentFixture<FormNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
