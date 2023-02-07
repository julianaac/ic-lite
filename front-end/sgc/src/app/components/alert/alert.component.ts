import { AndTypeAlert } from './../../model/and-type-alert';
import { Alert } from './../../model/alert';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(
    private servico: AlertService,
    private router: Router
  ) { }

  exibeAlerta(alerta: Alert): void {
    const elementoAlerta = document.querySelector<HTMLElement>('div.alert');
    const elementoAlertaMensagem = document.querySelector<HTMLElement>('div.alert span#mensagem');
    if (elementoAlerta && elementoAlertaMensagem) {
      elementoAlertaMensagem.innerText = alerta.mensagem;
      elementoAlerta.classList.add(alerta.tipo);
      elementoAlerta.classList.remove('off');
    }
  }

  fechaAlerta(): void {
    const elementoAlerta = document.querySelector<HTMLElement>('div.alert');
    if (elementoAlerta) {
      elementoAlerta.classList.add('off');
      elementoAlerta.classList.remove(
        AndTypeAlert.SUCESSO,
        AndTypeAlert.ERRO
      );
    }
  }

  ngOnInit(): void {

    this.servico.receberAlerta().subscribe(
      (alerta) => {
        this.exibeAlerta(alerta);
      }
    );

    this.router.events.subscribe(
      (evento) => {
        if (evento instanceof NavigationStart) {
          this.fechaAlerta();
        }
      }
    );

  }

}
