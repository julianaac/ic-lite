import { GroupTask } from './../../model/groupTask';
import { GroupAnswerService } from './../../services/group-answer.service';
import { GroupAnswer } from './../../model/groupAnswer';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { GroupTaskService } from 'src/app/services/group.service';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-form-groupAnswer',
  templateUrl: './form-group-answer.component.html',
  styleUrls: ['./form-group-answer.component.css']
})
export class FormGroupAnswerComponent implements OnInit, IForm<GroupAnswer> {

  constructor(
    private serviceGroupAnswer: GroupAnswerService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTask: TaskService,
    private serviceGroupTask: GroupTaskService,

  ){}

  groupTask: GroupTask[] = Array<GroupTask>();
  task: Task[] = Array<Task>();
  registro: GroupAnswer = <GroupAnswer>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.group_answer_id){
      this.serviceGroupAnswer.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceGroupAnswer.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceGroupTask.get().subscribe({
      next: (resposta: GroupTask[]) => {
        this.groupTask = resposta;
      }
    });
    this.serviceTask.get().subscribe({
      next: (resposta: Task[]) => {
        this.task = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('group_answer_id'); //ao invés de groupTask_id, talvez seja só id

    if (id) {
      this.serviceGroupAnswer.getById(+id).subscribe({
        next: (resposta: GroupAnswer) => {
          this.registro = resposta;
        }
      });
    }

  }

}
