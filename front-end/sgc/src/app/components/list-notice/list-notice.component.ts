import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { Notice } from 'src/app/model/notice';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Training } from 'src/app/model/training';
import { TypeNotice } from 'src/app/model/typeNotice';
import { AlertService } from 'src/app/services/alert.service';
import { NoticeService } from 'src/app/services/notice.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-notice',
  templateUrl: './list-notice.component.html',
  styleUrls: ['./list-notice.component.css']
})
export class ListNoticeComponent implements OnInit, IList<Notice> {

  constructor(
    private service: NoticeService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: Notice[] = Array<Notice>();
  training: Training[] =  Array<Training>();
  typenotice: TypeNotice[] = Array<TypeNotice>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Notice[]) => {
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
