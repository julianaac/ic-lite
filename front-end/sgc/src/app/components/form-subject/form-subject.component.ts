import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { SubjectService } from './../../services/subject.service';
import { Subject } from './../../model/subject';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/model/teacher';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/model/classroom';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.css']
})
export class FormSubjectComponent implements OnInit, IForm<Subject> {

  constructor(
    private serviceSubject: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTeacher: TeacherService,
    private serviceTraining: TrainingService,
    private serviceClassroom: ClassroomService,

  ){}

  training: Training[] = Array<Training>();
  teacher: Teacher[] = Array<Teacher>();
  classroom: Classroom[] = Array<Classroom>();
  registro: Subject = <Subject>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.subject_id){
      this.serviceSubject.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceSubject.insert(this.registro).subscribe({
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
    this.serviceTeacher.get().subscribe({
      next: (resposta: Teacher[]) => {
        this.teacher = resposta;
      }
    });
    this.serviceClassroom.get().subscribe({
      next: (resposta: Classroom[]) => {
        this.classroom = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('subject_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceSubject.getById(+id).subscribe({
        next: (resposta: Subject) => {
          this.registro = resposta;
        }
      });
    }

  }

}
