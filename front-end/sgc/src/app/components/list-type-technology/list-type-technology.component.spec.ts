import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeTechnologyComponent } from './list-type-technology.component';

describe('ListTypeTechnologyComponent', () => {
  let component: ListTypeTechnologyComponent;
  let fixture: ComponentFixture<ListTypeTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
