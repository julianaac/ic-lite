
import { EvaluationAnswer } from '../../model/evaluationAnswer';
import { Component, OnInit } from '@angular/core';
import { IForm } from '../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/model/teacher';
import { EvaluationAnswerService } from 'src/app/services/evaluation-answer.service';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-form-evaluationAnswer',
  templateUrl: './form-evaluation-answer.component.html',
  styleUrls: ['./form-evaluation-answer.component.css'],
})
export class FormEvaluationAnswerComponent
  implements OnInit, IForm<EvaluationAnswer>
{
  constructor(
    private serviceEvaluationAnswer: EvaluationAnswerService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceSubject: SubjectService,
    private serviceTeacher: TeacherService
  ) {}

  subject: Subject[] = Array<Subject>();
  teacher: Teacher[] = Array<Teacher>();

  registro: EvaluationAnswer = <EvaluationAnswer>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.evaluation_answer_id) {
      this.serviceEvaluationAnswer.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/technicalsupport']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceEvaluationAnswer.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceSubject.get().subscribe({
      next: (resposta: Subject[]) => {
        this.subject = resposta;
      },
    });

    this.serviceTeacher.get().subscribe({
      next: (resposta: Teacher[]) => {
        this.teacher = resposta;
      },
    });
    const id = this.route.snapshot.queryParamMap.get('evaluation_answer_id');
    if (id) {
      this.serviceEvaluationAnswer.getById(+id).subscribe({
        next: (resposta: EvaluationAnswer) => {
          this.registro = resposta;
        },
      });
    }
  }
}
