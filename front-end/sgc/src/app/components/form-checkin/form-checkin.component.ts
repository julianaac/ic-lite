import { CheckinSubject } from './../../model/checkin-subject';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/model/classroom';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentService } from 'src/app/services/student.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { Student } from 'src/app/model/student';
import { Component, OnInit } from '@angular/core';
import { Checkin } from 'src/app/model/checkin';
import { IForm } from 'src/app/model/i-form';
import { Subject } from 'src/app/model/subject';
import { AlertService } from 'src/app/services/alert.service';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Utils } from 'src/app/utils/utils';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { DatePipe } from '@angular/common';
import { CheckinStudentCurrent } from 'src/app/model/checkin-student-current';

@Component({
  selector: 'app-form-checkin',
  templateUrl: './form-checkin.component.html',
  styleUrls: ['./form-checkin.component.css']
})
export class FormCheckinComponent implements OnInit, IForm<Checkin> {

  dateTime = new Date().toLocaleString('pt-BR', {timeZone:'America/Rio_Branco',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  dataTimeCerto = this.dateTime.substring(10, 6)+'-'+this.dateTime.substring(5, 3)+'-'+this.dateTime.substring(2, 0)+'T'+ this.dateTime.substring(11,20);


  constructor (
    private service: CheckinService,
    private serviceStudent: StudentService,
    private serviceClassroom: ClassroomService,
    private serviceAlert: AlertService,
    private serviceSubject: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private servicoLogin: LoginService,
  ) {}

  student: Student = <Student>{};
  subject: Subject = <Subject>{};
  registro: Checkin = <Checkin>{};
  checkincurrent: CheckinStudentCurrent = <CheckinStudentCurrent>{};

  compareById = Utils.compareById;


  submit(form: NgForm): void {
    this.dateTime = new Date().toLocaleString('pt-BR', {timeZone:'America/Rio_Branco',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  this.dataTimeCerto = this.dateTime.substring(10, 6)+'-'+this.dateTime.substring(5, 3)+'-'+this.dateTime.substring(2, 0)+'T'+ this.dateTime.substring(11,20);
  if(this.checkincurrent == null){
    //cadastro aqui
    this.registro.checkin_exit = this.dataTimeCerto;
    this.registro.checkin_entry = this.dataTimeCerto;
      this.registro.checkin_exit = this.dataTimeCerto;
      this.registro.checkin_valid = 1;
      this.registro.checkin_status = 1;
      this.registro.student = this.student;

      this.registro.subject = this.subject;
      this.registro.classroom = this.student.classroom;
      this.service.insert(this.registro).subscribe({
        complete: () => {

          form.resetForm();
          window.location.reload();
          this.serviceAlert.enviarAlertSucesso();
        }
      })
  }else{
      this.serviceAlert.enviarAlertFalhaCheckin();
  }
  }
  ngOnInit(): void {

    this.serviceSubject.getCurrentSubject(this.getUser().user_id).subscribe({
      next: (resposta: Subject) => {
        this.subject = resposta;
      }
    });
    this.service.getFindCheckinCurrentRel(this.getUser().user_id).subscribe({
      next: (resposta: CheckinStudentCurrent) => {
        this.checkincurrent = resposta;
      }
    });


    const idUser = this.servicoLogin.getUser().user_id;
    const id2 = this.service.getByIdStudent(idUser).subscribe({
      next: (resposta: Student) => {
        this.student = resposta;
      }
    });

  };

  getUser(): User {
    return this.servicoLogin.getUser();
  }

  getTurma(): CheckinSubject{
    return this.servicoLogin.getTurma();
  }

  getStudent(): Student{
    return this.servicoLogin.getStudent();
  }

}
