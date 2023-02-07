import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupTaskComponent } from './list-group-task.component';

describe('ListGroupTaskComponent', () => {
  let component: ListGroupTaskComponent;
  let fixture: ComponentFixture<ListGroupTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGroupTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
