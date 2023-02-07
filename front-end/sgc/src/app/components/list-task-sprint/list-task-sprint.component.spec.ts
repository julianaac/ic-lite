import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTask_SprintComponent } from './list-task-sprint.component';

describe('ListTask_SprintComponent', () => {
  let component: ListTask_SprintComponent;
  let fixture: ComponentFixture<ListTask_SprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTask_SprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTask_SprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
