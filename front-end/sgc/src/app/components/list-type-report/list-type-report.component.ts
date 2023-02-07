import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { TypeReportService } from './../../services/type-report.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { TypeReport } from 'src/app/model/typeReport';

@Component({
  selector: 'app-list-type-report',
  templateUrl: './list-type-report.component.html',
  styleUrls: ['./list-type-report.component.css']
})
export class ListTypeReportComponent implements OnInit, IList<TypeReport> {

  constructor(
    private service: TypeReportService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: TypeReport[] = Array<TypeReport>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TypeReport[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o Tipo?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
}



