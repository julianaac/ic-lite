

import { IList } from 'src/app/model/i-list';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { StudentEvaluation } from 'src/app/model/studentEvaluation';
import { StudentEvaluationService } from 'src/app/services/student-evaluation.service';
import { Subject } from 'src/app/model/subject';
import { Student } from 'src/app/model/student';
import { Training } from 'src/app/model/training';
import { Teacher } from 'src/app/model/teacher';


@Component({
  selector: 'app-list-student-evaluation',
  templateUrl: './list-student-evaluation.component.html',
  styleUrls: ['./list-student-evaluation.component.css'],
})
export class ListStudentEvaluationComponent
  implements OnInit, IList<StudentEvaluation>
{
  constructor(
    private service: StudentEvaluationService,
    private alertService: AlertService
  ) {}

  registros: StudentEvaluation[] = Array<StudentEvaluation>();

  subject: Subject[] = Array<Subject>();
  student: Student[] = Array<Student>();
  teacher: Teacher[] = Array<Teacher>();
  training: Training[] = Array<Training>();

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: StudentEvaluation[]) => {
        this.registros = resposta;
        this.alertService.enviarAlertSucesso();
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir a Avaliação do Aluno(a) ?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.alertService.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.get();
  }
}
