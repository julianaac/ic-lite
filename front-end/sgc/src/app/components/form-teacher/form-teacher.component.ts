// ESTAS SÃO AS CHAVES ESTRANGEIRAS DA TABELA TEACHER!
// training: Training; //fk
// user: User; //fk

import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.css'],
})
export class FormTeacherComponent implements OnInit, IForm<Teacher> {
  constructor(
    private serviceTeacher: TeacherService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTraining: TrainingService,
    private serviceUser: UserService
  ) {}

  training: Training[] = Array<Training>();
  user: User[] = Array<User>();
  registro: Teacher = <Teacher>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.teacher_id) {
      this.serviceTeacher.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceTeacher.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      },
    });
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('teacher_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceTeacher.getById(+id).subscribe({
        next: (resposta: Teacher) => {
          this.registro = resposta;
        },
      });
    }
  }
}
