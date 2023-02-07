import { Component } from '@angular/core';
import * as moment  from "moment"
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent{

  declare hours :any;

  // $Object = new DateTime();
  // $Object->setTimezone(new DateTimeZone('America/Rio_Branco'));
  // $DateAndTime = $Object->format("Y-m-d H:i:s");
  // $horario = $Object->format("d/m/Y H:i:s");
  // Funcao pegar a data e hora atual - check-in
  new = new Date();
  // HoursNow = setTimeZone('America/Rio_Branco')
  now: string =  new Date().toUTCString();
  ;

  getData(){
  }
  dataHoje() {
  }
  ngOnInit() {
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

    this.getData();
    }

}

