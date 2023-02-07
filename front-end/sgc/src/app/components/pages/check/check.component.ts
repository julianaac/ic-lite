import { LoginService } from 'src/app/services/login.service';
import { Component } from '@angular/core';
import { Checkin } from 'src/app/model/checkin';
import { CheckinService } from 'src/app/services/checkin.service';
import { User } from 'src/app/model/user';
import { CheckinStudentCurrent } from 'src/app/model/checkin-student-current';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  constructor (
    private service: CheckinService,
    private servicoLogin: LoginService
  ) {}
  check: Checkin = <Checkin>{};
  checkincurrent: CheckinStudentCurrent = <CheckinStudentCurrent>{};


  getUser(): User {
    return this.servicoLogin.getUser();
  }
  ngOnInit() {
    //aqui provavelmente é outr lugar que está fazendo aquele erro de consulta antes do checkin
    this.service.getFindCheckinCurrent(this.getUser().user_id).subscribe({
      next: (resposta: Checkin) => {
        this.check = resposta;
      }
    });
    this.service.getFindCheckinCurrentRel(this.getUser().user_id).subscribe({
      next: (resposta: CheckinStudentCurrent) => {
        this.checkincurrent = resposta;
      }
    });





    let openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
      modal?.classList.toggle("hide");
      fade?.classList.toggle("hide");
    };
    [openModalButton, closeModalButton, fade].forEach((el) => {
      el?.addEventListener("click", () => toggleModal());
    });
    // $('.time-label').html('Ultima atualização: ' + this.dataHoje());


    let openModalButton1 = document.querySelector("#open-modal1");
    const closeModalButton1 = document.querySelector("#close-modal1");
    const modal1 = document.querySelector("#modal1");
    const fade1 = document.querySelector("#fade1");

    const toggleModal1 = () => {
      modal1?.classList.toggle("hide1");
      fade1?.classList.toggle("hide1");
    };
    [openModalButton1, closeModalButton1, fade1].forEach((el) => {
      el?.addEventListener("click", () => toggleModal1());
    });
    // $('.time-label').html('Ultima atualização: ' + this.dataHoje());

    }

}

