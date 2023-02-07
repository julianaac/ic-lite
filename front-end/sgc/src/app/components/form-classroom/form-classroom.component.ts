import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { ClassroomService } from './../../services/classroom.service';
import { Classroom } from './../../model/classroom';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { Laboratory } from 'src/app/model/laboratory';

@Component({
  selector: 'app-form-classroom',
  templateUrl: './form-classroom.component.html',
  styleUrls: ['./form-classroom.component.css']
})
export class FormClassroomComponent implements OnInit, IForm<Classroom> {

  constructor(
    private serviceClassroom: ClassroomService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceLaboratory: LaboratoryService,
    private serviceTraining: TrainingService,

  ){}

  trainings: Training[] = Array<Training>();
  laboratorys: Laboratory[] = Array<Laboratory>();
  registro: Classroom = <Classroom>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.classroom_id){
      this.serviceClassroom.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/classroom']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceClassroom.insert(this.registro).subscribe({
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
        this.trainings = resposta;
      }
    });
    this.serviceLaboratory.get().subscribe({
      next: (resposta: Laboratory[]) => {
        this.laboratorys = resposta;
      }
    });
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.serviceClassroom.getById(+id).subscribe({
        next: (resposta: Classroom) => {
          this.registro = resposta;
        }
      });
    }

  }

}
