import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { SingleAnswer } from 'src/app/model/singleAnswer';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Task } from 'src/app/model/task';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { SingleAnswerService } from 'src/app/services/single-answer.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-single-answer',
  templateUrl: './list-single-answer.component.html',
  styleUrls: ['./list-single-answer.component.css']
})
export class ListSingleAnswerComponent implements OnInit, IList<SingleAnswer> {

  constructor(
    private service: SingleAnswerService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: SingleAnswer[] = Array<SingleAnswer>();
  user: User[] = Array<User>();
  task: Task[] = Array<Task>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: SingleAnswer[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a resposta única?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}

