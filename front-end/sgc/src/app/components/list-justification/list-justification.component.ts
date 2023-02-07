// justification_id: number;
// justification_text: string;
// justification_file: string;
// student: Student; //fk
// recordClass: RecordClass; //fk
// absence: Absence; //fk

import { AlertService } from './../../services/alert.service';
import { JustificationService } from './../../services/justification.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Justification } from 'src/app/model/justification';
import { Absence } from 'src/app/model/absence';
import { RecordClass } from 'src/app/model/recordClass';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-list-justification',
  templateUrl: './list-justification.component.html',
  styleUrls: ['./list-justification.component.css'],
})
export class ListJustificationComponent
  implements OnInit, IList<Justification>
{
  constructor(
    private service: JustificationService,
    private serviceAlert: AlertService
  ) {}

  registros: Justification[] = Array<Justification>();
  student: Student[] = Array<Student>();
  recordClass: RecordClass[] = Array<RecordClass>();
  absence: Absence[] = Array<Absence>();

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Justification[]) => {
        this.registros = resposta;
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir a Justificação?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
}
