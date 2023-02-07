// group_id: number;
// group_name: string;
// group_member: string;
// task: Task; //fk

import { IList } from 'src/app/model/i-list';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { GroupTaskService } from 'src/app/services/group.service';
import { Task } from 'src/app/model/task';
import { GroupTask } from 'src/app/model/groupTask';


@Component({
  selector: 'app-list-group-task',
  templateUrl: './list-group-task.component.html',
  styleUrls: ['./list-group-task.component.css'],
})
export class ListGroupTaskComponent implements OnInit, IList<GroupTask> {
  constructor(
    private service: GroupTaskService,
    private alertService: AlertService
  ) {}

  registros: GroupTask[] = Array<GroupTask>();

  task: Task[] = Array<Task>();

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: GroupTask[]) => {
        this.registros = resposta;
        this.alertService.enviarAlertSucesso();
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir o Grupo de Atividade ?')) {
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
