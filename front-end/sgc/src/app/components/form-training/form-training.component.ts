import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { AlertService } from './../../services/alert.service';
import { TrainingService } from './../../services/training.service';
import { IForm } from './../../model/i-form';
import { Training } from './../../model/training';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-training',
  templateUrl: './form-training.component.html',
  styleUrls: ['./form-training.component.css']

})

export class FormTrainingComponent implements OnInit, IForm<Training> {

  constructor(
    private serviceTraining: TrainingService,
    private serviceAlert: AlertService,
    private serviceUser: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  registro: Training = <Training>{};
  user: User[] = Array<User>();
  compareById = Utils.compareById;


  submit(form: NgForm): void {
    if(this.registro.training_id){
      this.serviceTraining.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/training']);
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceTraining.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {
    this.serviceUser.getCordenador().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
        console.log(this.user);
      }
    });

    const id = this.route.snapshot.queryParamMap.get('training_id');

    if (id) {
      this.serviceTraining.getById(+id).subscribe({
        next: (resposta: Training) => {
          this.registro = resposta;

        }
      });
    }

  }
}
