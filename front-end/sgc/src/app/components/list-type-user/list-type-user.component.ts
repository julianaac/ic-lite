import { AlertService } from './../../services/alert.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { TypeUserService } from 'src/app/services/type-user.service';
import { TypeUser } from 'src/app/model/typeUser';

@Component({
  selector: 'app-list-type-user',
  templateUrl: './list-type-user.component.html',
  styleUrls: ['./list-type-user.component.css']
})
export class ListTypeUserComponent implements OnInit, IList<TypeUser> {

  constructor(
    private service: TypeUserService,
    private serviceAlert: AlertService,
  ) { }

  registros: TypeUser[] = Array<TypeUser>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TypeUser[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o Laboratório?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
  }



