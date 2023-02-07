

import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { EvaluationAnswer } from 'src/app/model/evaluationAnswer';
import { EvaluationAnswerService } from 'src/app/services/evaluation-answer.service';
import { Teacher } from 'src/app/model/teacher';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-list-evaluation-answer',
  templateUrl: './list-evaluation-answer.component.html',
  styleUrls: ['./list-evaluation-answer.component.css'],
})
export class ListEvaluationAnswerComponent
  implements OnInit, IList<EvaluationAnswer>
{
  registros: EvaluationAnswer[] = Array<EvaluationAnswer>();

  subject: Subject[] = Array<Subject>();
  teacher: Teacher[] = Array<Teacher>();

  constructor(private service: EvaluationAnswerService) {}

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: EvaluationAnswer[]) => {
        this.registros = resposta;
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir a Avaliação de Atividades?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
        },
      });
    }
  }
  ngOnInit(): void {
    this.get();
  }
}
