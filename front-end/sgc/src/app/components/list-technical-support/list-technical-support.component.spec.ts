import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnicalSupportComponent } from './list-technical-support.component';

describe('ListTechnicalSupportComponent', () => {
  let component: ListTechnicalSupportComponent;
  let fixture: ComponentFixture<ListTechnicalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechnicalSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTechnicalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
