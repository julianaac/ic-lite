import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TrainingService } from 'src/app/services/training.service';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/model/user';
import { Training } from 'src/app/model/training';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css'],
})
export class FormAdminComponent implements OnInit, IForm<Admin> {
  constructor(
    private serviceAdmin: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTraining: TrainingService,
    private serviceUser: UserService
  ) {}

  training: Training[] = Array<Training>();
  user: User[] = Array<User>();
  registro: Admin = <Admin>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.admin_id) {
      this.serviceAdmin.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceAdmin.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      },
    });
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('admin_id'); 

    if (id) {
      this.serviceAdmin.getById(+id).subscribe({
        next: (resposta: Admin) => {
          this.registro = resposta;
        },
      });
    }
  }
}
