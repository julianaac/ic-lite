import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordClassComponent } from './list-record-class.component';

describe('ListRecordClassComponent', () => {
  let component: ListRecordClassComponent;
  let fixture: ComponentFixture<ListRecordClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecordClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecordClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
