
import { StudentEvaluation } from './../../model/studentEvaluation';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/app/model/training';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { StudentEvaluationService } from 'src/app/services/student-evaluation.service';
import { Student } from 'src/app/model/student';
import { Teacher } from 'src/app/model/teacher';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-form-studentEvaluation',
  templateUrl: './form-student-evaluation.component.html',
  styleUrls: ['./form-student-evaluation.component.css'],
})
export class FormStudentEvaluationComponent
  implements OnInit, IForm<StudentEvaluation>
{
  constructor(
    private serviceStudentEvaluation: StudentEvaluationService,
    private router: Router,
    private route: ActivatedRoute,

    private serviceSubject: SubjectService,
    private serviceStudent: StudentService,
    private serviceTeacher: TeacherService,
    private serviceTraining: TrainingService
  ) {}

  subject: Subject[] = Array<Subject>();
  student: Student[] = Array<Student>();
  teacher: Teacher[] = Array<Teacher>();
  training: Training[] = Array<Training>();

  registro: StudentEvaluation = <StudentEvaluation>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.student_evaluation_id) {
      this.serviceStudentEvaluation.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/technicalsupport']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceStudentEvaluation.insert(this.registro).subscribe({
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

    this.serviceStudent.get().subscribe({
      next: (resposta: Student[]) => {
        this.student = resposta;
      },
    });

    this.serviceTeacher.get().subscribe({
      next: (resposta: Teacher[]) => {
        this.teacher = resposta;
      },
    });

    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('student_evaluation_id');
    if (id) {
      this.serviceStudentEvaluation.getById(+id).subscribe({
        next: (resposta: StudentEvaluation) => {
          this.registro = resposta;
        },
      });
    }
  }
}
