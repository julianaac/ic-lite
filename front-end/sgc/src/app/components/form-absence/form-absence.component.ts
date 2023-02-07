import { Training } from './../../model/training';
import { StudentService } from './../../services/student.service';
import { Student } from './../../model/student';
import { AbsenceService } from './../../services/absence.service';
import { Absence } from './../../model/absence';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/model/subject';


@Component({
  selector: 'app-form-absence',
  templateUrl: './form-absence.component.html',
  styleUrls: ['./form-absence.component.css']
})
export class FormAbsenceComponent implements OnInit, IForm<Absence> {

  constructor(
    private serviceAbsence: AbsenceService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceStudent: StudentService,
    private serviceSubject: SubjectService,

  ){}
  student: Student[] = Array<Student>();
  subject: Subject[] = Array<Subject>();
  registro: Absence = <Absence>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.absence_id){
      this.serviceAbsence.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceAbsence.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceSubject.get().subscribe({
      next: (resposta: Subject[]) => {
        this.subject = resposta;
      }
    });
    this.serviceStudent.get().subscribe({
      next: (resposta: Student[]) => {
        this.student = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('absence_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceAbsence.getById(+id).subscribe({
        next: (resposta: Absence) => {
          this.registro = resposta;
        }
      });
    }

  }

}
