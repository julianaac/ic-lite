import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { TypeTaskService } from './../../services/type-task.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { TypeTask } from 'src/app/model/typeTask';

@Component({
  selector: 'app-list-type-task',
  templateUrl: './list-type-task.component.html',
  styleUrls: ['./list-type-task.component.css']
})
export class ListTypeTaskComponent implements OnInit, IList<TypeTask> {

  constructor(
    private service: TypeTaskService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: TypeTask[] = Array<TypeTask>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TypeTask[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o tipo de tarefa?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
}



