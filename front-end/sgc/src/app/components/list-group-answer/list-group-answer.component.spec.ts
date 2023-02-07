import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupAnswerComponent } from './list-group-answer.component';

describe('ListGroupAnswerComponent', () => {
  let component: ListGroupAnswerComponent;
  let fixture: ComponentFixture<ListGroupAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroupAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
