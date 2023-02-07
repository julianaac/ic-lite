import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSituationComponent } from './list-situation.component';

describe('ListSituationComponent', () => {
  let component: ListSituationComponent;
  let fixture: ComponentFixture<ListSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
