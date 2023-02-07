
import { UserService } from 'src/app/services/user.service';
import { JustificationService } from './../../services/justification.service';
import { Justification } from './../../model/justification';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/services/student.service';
import { RecordClassService } from 'src/app/services/record-class.service';
import { AbsenceService } from 'src/app/services/absence.service';
import { Student } from 'src/app/model/student';
import { RecordClass } from 'src/app/model/recordClass';
import { Absence } from 'src/app/model/absence';

@Component({
  selector: 'app-form-justification',
  templateUrl: './form-justification.component.html',
  styleUrls: ['./form-justification.component.css'],
})
export class FormJustificationComponent
  implements OnInit, IForm<Justification>
{
  constructor(
    private serviceJustification: JustificationService,
    private router: Router,
    private route: ActivatedRoute,
    // Aqui temos: private das chaves estrangeiras
    // (ServiceNomedoAtributo(Maiúscula):NomedoAtributo(Maíscula)+Service)
    private serviceStudent: StudentService,
    private serviceRecordClass: RecordClassService,
    private serviceAbsence: AbsenceService
  ) {}

  // Aqui temos: Variáveis da chave estrangera(minúsculas):Atributos da
  //chave estrangeira(Maiúsculas)!

  student: Student[] = Array<Student>();
  recordClass: RecordClass[] = Array<RecordClass>();
  absence: Absence[] = Array<Absence>();
  registro: Justification = <Justification>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.justification_id) {
      this.serviceJustification.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/justification']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceJustification.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceStudent.get().subscribe({
      next: (resposta: Student[]) => {
        this.student = resposta;
      },
    });

    this.serviceRecordClass.get().subscribe({
      next: (resposta: RecordClass[]) => {
        this.recordClass = resposta;
      },
    });

    this.serviceAbsence.get().subscribe({
      next: (resposta: Absence[]) => {
        this.absence = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('justification_id');
    if (id) {
      this.serviceJustification.getById(+id).subscribe({
        next: (resposta: Justification) => {
          this.registro = resposta;
        },
      });
    }
  }
}
