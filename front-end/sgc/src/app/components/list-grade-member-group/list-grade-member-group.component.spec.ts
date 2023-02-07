import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradeMemberGroupComponent } from './list-grade-member-group.component';

describe('ListGradeMemberGroupComponent', () => {
  let component: ListGradeMemberGroupComponent;
  let fixture: ComponentFixture<ListGradeMemberGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGradeMemberGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGradeMemberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
