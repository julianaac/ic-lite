import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeNoticeComponent } from './list-type-notice.component';

describe('ListTypeNoticeComponent', () => {
  let component: ListTypeNoticeComponent;
  let fixture: ComponentFixture<ListTypeNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
