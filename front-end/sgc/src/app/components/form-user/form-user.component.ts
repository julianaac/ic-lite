import { SituationService } from './../../services/situation.service';
import { Situation } from './../../model/situation';
import { TypeUserService } from './../../services/type-user.service';
import { TypeUser } from './../../model/typeUser';
import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit, IForm<User> {

  constructor(
    private serviceUser: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTypeUser: TypeUserService,
    private serviceSituation: SituationService,

  ){}

  situation: Situation[] = Array<Situation>();
  typeUser: TypeUser[] = Array<TypeUser>();
  registro: User = <User>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.user_id){
      this.serviceUser.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/user']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceUser.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceSituation.get().subscribe({
      next: (resposta: Situation[]) => {
        this.situation = resposta;
      }
    });
    this.serviceTypeUser.get().subscribe({
      next: (resposta: TypeUser[]) => {
        this.typeUser = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('user_id'); 

    if (id) {
      this.serviceUser.getById(+id).subscribe({
        next: (resposta: User) => {
          this.registro = resposta;
        }
      });
    }

  }

}
