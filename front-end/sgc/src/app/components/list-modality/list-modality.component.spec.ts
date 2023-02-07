import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModalityComponent } from './list-modality.component';

describe('ListModalityComponent', () => {
  let component: ListModalityComponent;
  let fixture: ComponentFixture<ListModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListModalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
