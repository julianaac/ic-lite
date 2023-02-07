import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocioeconomicInformationComponent } from './list-socioeconomic-information.component';

describe('ListSocioeconomicInformationComponent', () => {
  let component: ListSocioeconomicInformationComponent;
  let fixture: ComponentFixture<ListSocioeconomicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSocioeconomicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSocioeconomicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
