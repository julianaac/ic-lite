import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeconomicComponent } from './socioeconomic.component';

describe('SocioeconomicComponent', () => {
  let component: SocioeconomicComponent;
  let fixture: ComponentFixture<SocioeconomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioeconomicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioeconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
