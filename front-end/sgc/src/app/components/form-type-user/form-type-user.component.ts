import { TypeUserService } from './../../services/type-user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IForm } from 'src/app/model/i-form';
import { TypeUser } from 'src/app/model/typeUser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { User } from 'src/app/model/user';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-type-user',
  templateUrl: './form-type-user.component.html',
  styleUrls: ['./form-type-user.component.css']
})
export class FormTypeUserComponent implements OnInit, IForm<TypeUser> {

  constructor(
    private TypeUserService: AlertService,
    private service: TypeUserService,
    private serviceUser: TypeUserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  registro: TypeUser = <TypeUser>{};
  compareById = Utils.compareById;


  submit(form: NgForm): void {
    if(this.registro.type_user_id){
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/typeuser/']);
      /*     this.serviceAlert.enviarAlertSucesso(); */
        }
      });
    }else{
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
  /*         this.serviceAlert.enviarAlertSucesso(); */

        }
      })
    }


  }
  ngOnInit(): void {
/*     this.TypeUserService.get().subscribe({
       next: (resposta: User[]) => {
        this.TyperUser = resposta;
      } */


    const id = this.route.snapshot.queryParamMap.get('type_user_id');

    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TypeUser) => {
          this.registro = resposta;
        }
      });
    }

  }
}
