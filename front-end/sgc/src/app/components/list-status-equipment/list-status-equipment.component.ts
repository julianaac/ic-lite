import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { AlertService } from 'src/app/services/alert.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-status-equipment',
  templateUrl: './list-status-equipment.component.html',
  styleUrls: ['./list-status-equipment.component.css']
})
export class ListStatusEquipmentComponent implements OnInit, IList <StatusEquipment> {
 
  constructor(
    private service: StatusEquipmentService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: StatusEquipment[] = Array<StatusEquipment>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: StatusEquipment[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir o status e equipamento?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
