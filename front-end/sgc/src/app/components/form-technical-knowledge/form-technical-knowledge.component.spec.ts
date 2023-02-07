import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTechnicalKnowledgeComponent } from './form-technical-knowledge.component';

describe('FormTechnicalKnowledgeComponent', () => {
  let component: FormTechnicalKnowledgeComponent;
  let fixture: ComponentFixture<FormTechnicalKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTechnicalKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTechnicalKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
