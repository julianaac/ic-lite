import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { AndTypeAlert } from '../model/and-type-alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  private controleAlert: Subject<Alert>;

  constructor() {
    this.controleAlert = new Subject<Alert>();
  }

  enviarAlert(alert: Alert): void {
    this.controleAlert.next(alert);
  }

  enviarAlertSucesso(): void {
    this.controleAlert.next({
      tipo: AndTypeAlert.SUCESSO,
      mensagem: 'Operação realizada com sucesso!'
    })
  }
  enviarAlertFalhaCheckout(): void {
    this.controleAlert.next({
      tipo: AndTypeAlert.ERRO,
      mensagem: 'Você já fez checkout, vai para casa!'
    })
  }
  enviarAlertFalhaCheckin2(): void {
    this.controleAlert.next({
      tipo: AndTypeAlert.ERRO,
      mensagem: ':( Todo mundo erra, faça checkin agora!'
    })
  }
  enviarAlertFalhaCheckin(): void {
    this.controleAlert.next({
      tipo: AndTypeAlert.ERRO,
      mensagem: 'O checkin já foi realizado!'
    })
  }
  enviarAlertCheckin(): void {
    this.controleAlert.next({
      tipo: AndTypeAlert.SUCESSO,
      mensagem: 'Checkin Realizado com Sucesso!'
    })
  }

  receberAlerta(): Observable<Alert> {
    return this.controleAlert.asObservable();
  }
}
