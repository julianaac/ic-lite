import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGradeMemberGroupComponent } from './form-grade-member-group.component';

describe('FormGradeMemberGroupComponent', () => {
  let component: FormGradeMemberGroupComponent;
  let fixture: ComponentFixture<FormGradeMemberGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGradeMemberGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGradeMemberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
