import { Component, OnInit } from '@angular/core';
import { GroupAnswer } from 'src/app/model/groupAnswer';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Task } from 'src/app/model/task';
import { AlertService } from 'src/app/services/alert.service';
import { GroupAnswerService } from 'src/app/services/group-answer.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-group-answer',
  templateUrl: './list-group-answer.component.html',
  styleUrls: ['./list-group-answer.component.css']
})
export class ListGroupAnswerComponent implements OnInit, IList<GroupAnswer> {

  constructor(
    private service: GroupAnswerService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: GroupAnswer[] = Array<GroupAnswer>();
  task: Task[] = Array<Task>();
  group: GroupAnswer[] = Array<GroupAnswer>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: GroupAnswer[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a resposta de grupo?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}

