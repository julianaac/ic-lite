// technical_support_id: number;
// technical_support_Description: string;

// 04 CHAVES ESTRANGEIRAS:
// technical: User; //fk
// teacher: User; //fk
// laboratory: Laboratory; //fk
// training: Training; //fk

import { TechnicalSupport } from './../../model/technicalSupport';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { UserService } from 'src/app/services/user.service';
import { TrainingService } from 'src/app/services/training.service';
import { User } from 'src/app/model/user';
import { Laboratory } from 'src/app/model/laboratory';
import { Training } from 'src/app/model/training';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { TechnicalSupportService } from 'src/app/services/technical-support.service';

@Component({
  selector: 'app-form-technicalSupport',
  templateUrl: './form-technical-support.component.html',
  styleUrls: ['./form-technical-support.component.css'],
})
export class FormTechnicalSupportComponent
  implements OnInit, IForm<TechnicalSupport>
{
  constructor(
    
    private serviceTechnicalSupport: TechnicalSupportService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceUser: UserService,
    private serviceLaboratory: LaboratoryService,
    private serviceTraining: TrainingService
  ) {}

  technical: User[] = Array<User>();
  teacher: User[] = Array<User>();
  laboratory: Laboratory[] = Array<Laboratory>();
  training: Training[] = Array<Training>();

  registro: TechnicalSupport = <TechnicalSupport>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.technical_support_id) {
      this.serviceTechnicalSupport.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/technicalsupport']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceTechnicalSupport.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.technical = resposta;
      },
    });
    
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.teacher = resposta;
      },
    });

    this.serviceLaboratory.get().subscribe({
      next: (resposta: Laboratory[]) => {
        this.laboratory = resposta;
      },
    });

    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      },
    });


    const id = this.route.snapshot.queryParamMap.get('technical_support_id');
    if (id) {
      this.serviceTechnicalSupport.getById(+id).subscribe({
        next: (resposta: TechnicalSupport) => {
          this.registro = resposta;
        },
      });
    }
  }
}
