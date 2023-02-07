import { SubjectService } from './../../services/subject.service';
import { Subject } from './../../model/subject';
import { RecordClass } from './../../model/recordClass';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { RecordClassService } from 'src/app/services/record-class.service';
import { Classroom } from 'src/app/model/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-form-record-class',
  templateUrl: './form-record-class.component.html',
  styleUrls: ['./form-record-class.component.css']
})
export class FormRecordClassComponent implements OnInit, IForm<RecordClass> {

  constructor(
    private serviceRecordClass: RecordClassService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceClassroom: ClassroomService,
    private serviceSubject: SubjectService,

  ){}

  subject: Subject[] = Array<Subject>();
  classroom: Classroom[] = Array<Classroom>();
  registro: RecordClass = <RecordClass>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.record_class_id){
      this.serviceRecordClass.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceRecordClass.insert(this.registro).subscribe({
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
    this.serviceClassroom.get().subscribe({
      next: (resposta: Classroom[]) => {
        this.classroom = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('record_class_id'); //ao invés de subject_id, talvez seja só id

    if (id) {
      this.serviceRecordClass.getById(+id).subscribe({
        next: (resposta: RecordClass) => {
          this.registro = resposta;
        }
      });
    }

  }

}
