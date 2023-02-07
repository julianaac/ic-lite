import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/model/classroom';
import { IList } from 'src/app/model/i-list';
import { RecordClass } from 'src/app/model/recordClass';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Subject } from 'src/app/model/subject';
import { AlertService } from 'src/app/services/alert.service';
import { RecordClassService } from 'src/app/services/record-class.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-record-class',
  templateUrl: './list-record-class.component.html',
  styleUrls: ['./list-record-class.component.css']
})
export class ListRecordClassComponent implements OnInit, IList<RecordClass> {

  constructor(
    private service: RecordClassService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: RecordClass[] = Array<RecordClass>();
  classroom: Classroom[] =  Array<Classroom>();
  subject: Subject[] = Array<Subject>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: RecordClass[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o registro de aula?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
