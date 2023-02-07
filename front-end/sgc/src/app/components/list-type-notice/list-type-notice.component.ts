import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { TypeNotice } from 'src/app/model/typeNotice';
import { TypeTechnology } from 'src/app/model/typeTechnology';
import { AlertService } from 'src/app/services/alert.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { TypeNoticeService } from 'src/app/services/type-notice.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-type-notice',
  templateUrl: './list-type-notice.component.html',
  styleUrls: ['./list-type-notice.component.css']
})
export class ListTypeNoticeComponent implements OnInit, IList<TypeNotice> {

  constructor(
    private service: TypeNoticeService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: TypeNotice[] = Array<TypeNotice>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TypeNotice[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a notificação?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
