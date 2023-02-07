import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnicalKnowledgeComponent } from './list-technical-knowledge.component';

describe('ListTechnicalKnowledgeComponent', () => {
  let component: ListTechnicalKnowledgeComponent;
  let fixture: ComponentFixture<ListTechnicalKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechnicalKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTechnicalKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
