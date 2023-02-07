import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Checkin } from 'src/app/model/checkin';
import { CheckinStudentCurrent } from 'src/app/model/checkin-student-current';
import { CheckinSubject } from 'src/app/model/checkin-subject';
import { Classroom } from 'src/app/model/classroom';
import { IForm } from 'src/app/model/i-form';
import { Student } from 'src/app/model/student';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { LoginService } from 'src/app/services/login.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-checkout',
  templateUrl: './form-checkout.component.html',
  styleUrls: ['./form-checkout.component.css']
})
export class FormCheckoutComponent implements OnInit, IForm<Checkin> {
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
    private serviceAlert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private servicoLogin: LoginService,
  ) {}

  classroom: Classroom[] = Array<Classroom>();
  check: Checkin = <Checkin>{};
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
    this.registro = this.check;
    this.dataTimeCerto = this.dateTime.substring(10, 6)+'-'+this.dateTime.substring(5, 3)+'-'+this.dateTime.substring(2, 0)+'T'+ this.dateTime.substring(11,20);
    //caso o retorno seja true quer dizer que exite checkin para a data atual
    if(this.checkincurrent != null){
      //cadastro aqui
      //a primeira verificação é redundante para verificar se exite um checkin desse aluno
      //a segunda verificação é se esse aluno está com status correspondente a 1, o que indica que ele fez apenas o checkin

      if(this.registro.checkin_id != null && this.registro.checkin_status ==1){
        this.registro.checkin_exit = this.dataTimeCerto;
        this.registro.checkin_status = 2;
        //verificar se o horario do checkin está dentro do estabelecido pelo laboratório
        //precisa ser feito essa função ainda
        this.registro.checkin_valid = 3;
        this.service.update(this.registro).subscribe({
        complete: () => {
          // this.router.navigate(['/report']);
          window.location.reload();
          this.serviceAlert.enviarAlertSucesso();
        }
        });
      }else{
        if(this.check.checkin_status ==2){
          this.serviceAlert.enviarAlertFalhaCheckout();
        }
      }
    }else{
      this.serviceAlert.enviarAlertFalhaCheckin2();
    }
  }
  ngOnInit(): void {

    //View que retorna se o aluno fez o checkin na data atual
    //talvez aqui tambem  mas acho que é só no de baixo
    this.service.getFindCheckinCurrentRel(this.getUser().user_id).subscribe({
      next: (resposta: CheckinStudentCurrent) => {
        this.checkincurrent = resposta;
      }
    });

    //função que retorna o ultimo checkin que o estudante fez
  //aqui está dando erro porque quando entra na parte do checkin isso aqui já roda, se tivesse como execultar só quando clicar no modal
    this.service.getFindCheckinCurrent(this.getUser().user_id).subscribe({
      next: (resposta: Checkin) => {
        this.check = resposta;
      }
    });
    const id = this.route.snapshot.queryParamMap.get('checkin_id'); //ao invés de training_id, talvez seja só id
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