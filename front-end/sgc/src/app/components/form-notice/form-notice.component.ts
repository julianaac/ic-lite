import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { TypeNoticeService } from './../../services/type-notice.service';
import { TypeNotice } from './../../model/typeNotice';
import { NoticeService } from './../../services/notice.service';
import { Notice } from './../../model/notice';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/model/classroom';

@Component({
  selector: 'app-form-notice',
  templateUrl: './form-notice.component.html',
  styleUrls: ['./form-notice.component.css']
})
export class FormNoticeComponent implements OnInit, IForm<Notice> {

  constructor(
    private serviceNotice: NoticeService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTypeNotice: TypeNoticeService,
    private serviceTraining: TrainingService,
    private serviceClassroom: ClassroomService,

  ){}

  training: Training[] = Array<Training>();
  classroom: Classroom[] = Array<Classroom>();
  typeNotice: TypeNotice[] = Array<TypeNotice>();
  registro: Notice = <Notice>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.notice_id){
      this.serviceNotice.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceNotice.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      }
    });
    this.serviceClassroom.get().subscribe({
      next: (resposta: Classroom[]) => {
        this.classroom = resposta;
      }
    });
    this.serviceTypeNotice.get().subscribe({
      next: (resposta: TypeNotice[]) => {
        this.typeNotice = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('notice_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceNotice.getById(+id).subscribe({
        next: (resposta: Notice) => {
          this.registro = resposta;
        }
      });
    }

  }

}
