
import { UserService } from 'src/app/services/user.service';
import { SingleAnswer } from './../../model/singleAnswer';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { User } from 'src/app/model/user';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/task';
import { SingleAnswerService } from 'src/app/services/single-answer.service';


@Component({
  selector: 'app-form-singleAnswer',
  templateUrl: './form-single-answer.component.html',
  styleUrls: ['./form-single-answer.component.css'],
})
export class FormSingleAnswerComponent implements OnInit, IForm<SingleAnswer> {
  constructor(
    private serviceSingleAnswer: SingleAnswerService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceUser: UserService,
    private serviceTask: TaskService
  ) {}

  user: User[] = Array<User>();
  task: Task[] = Array<Task>();
  registro: SingleAnswer = <SingleAnswer>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.single_answer_id) {
      this.serviceSingleAnswer.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/singleAnswer']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceSingleAnswer.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });

    this.serviceTask.get().subscribe({
      next: (resposta: Task[]) => {
        this.task = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('single_answer_id');
    if (id) {
      this.serviceSingleAnswer.getById(+id).subscribe({
        next: (resposta: SingleAnswer) => {
          this.registro = resposta;
        },
      });
    }
  }
}
