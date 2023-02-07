import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeTaskComponent } from './list-type-task.component';

describe('ListTypeTaskComponent', () => {
  let component: ListTypeTaskComponent;
  let fixture: ComponentFixture<ListTypeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
