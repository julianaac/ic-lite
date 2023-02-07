
import { TaskSprint } from './../../model/taskSprint';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/task';

import { SprintService } from 'src/app/services/sprint.service';
import { Sprint } from 'src/app/model/sprint';
import { TaskSprintService } from 'src/app/services/task-sprint.service';

@Component({
  selector: 'app-form-taskSprint',
  templateUrl: './form-task-sprint.component.html',
  styleUrls: ['./form-task-sprint.component.css'],
})
export class FormTaskSprintComponent implements OnInit, IForm<TaskSprint> {
  constructor(

    // private serviceTaskSprint: TaskSprintService,
    private serviceTaskSprint: TaskSprintService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceSprint: SprintService

  ) {}

  sprint: Sprint[] = Array<Sprint>();  
  registro: TaskSprint = <TaskSprint>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.task_sprint_id) {
      this.serviceTaskSprint.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/taskSprint']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceTaskSprint.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceSprint.get().subscribe({
      next: (resposta: Sprint[]) => {
        this.sprint = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('task_sprint_id');
    if (id) {
      this.serviceTaskSprint.getById(+id).subscribe({
        next: (resposta: TaskSprint) => {
          this.registro = resposta;
        },
      });
    }
  }
}
