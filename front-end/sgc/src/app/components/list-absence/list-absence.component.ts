import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/model/absence';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Student } from 'src/app/model/student';
import { Subject } from 'src/app/model/subject';
import { AbsenceService } from 'src/app/services/absence.service';
import { AlertService } from 'src/app/services/alert.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class ListAbsenceComponent implements OnInit, IList<Absence> {

  constructor(
    private service: AbsenceService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: Absence[] = Array<Absence>();
  student: Student[] =  Array<Student>();
  subject: Subject[] = Array<Subject>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Absence[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o registro de ausência?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
