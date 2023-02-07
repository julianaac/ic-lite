import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleAnswerComponent } from './list-single-answer.component';

describe('ListSingleAnswerComponent', () => {
  let component: ListSingleAnswerComponent;
  let fixture: ComponentFixture<ListSingleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
