import { TechnicalKnowledge } from './../../model/technicalKnowledge';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicalKnowledgeService } from 'src/app/services/technical-knowledge.service';

@Component({
  selector: 'app-form-TechnicalKnowledge',
  templateUrl: './form-technical-knowledge.component.html',
  styleUrls: ['./form-technical-Knowledge.component.css'],
})
export class FormTechnicalKnowledgeComponent implements OnInit, IForm<TechnicalKnowledge> {
  constructor(
    private service: TechnicalKnowledgeService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: TechnicalKnowledge = <TechnicalKnowledge>{};

  submit(form: NgForm): void {
    if (this.registro.technical_knowledge_id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/home']);
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    } else {
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('technical_knowledge_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TechnicalKnowledge) => {
          this.registro = resposta;
        },
      });
    }
  }
}
