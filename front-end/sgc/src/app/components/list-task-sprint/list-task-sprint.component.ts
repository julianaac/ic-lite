
import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { Sprint } from 'src/app/model/sprint';
import { TaskSprint } from 'src/app/model/taskSprint';
import { AlertService } from 'src/app/services/alert.service';
import { TaskSprintService } from 'src/app/services/task-sprint.service';
import { Utils } from 'src/app/utils/utils';


@Component({
  selector: 'app-list-task-sprint',
  templateUrl: './list-task-sprint.component.html',
  styleUrls: ['./list-task-sprint.component.css'],
})
export class ListTask_SprintComponent implements OnInit, IList<TaskSprint> {
  constructor(
    private service: TaskSprintService,
    private serviceAlert: AlertService
  ) {}

  registros: TaskSprint[] = Array<TaskSprint>();
  sprint: Sprint[] = Array<Sprint>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TaskSprint[]) => {
        this.registros = resposta;
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir Sprint da Atividade?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
}
