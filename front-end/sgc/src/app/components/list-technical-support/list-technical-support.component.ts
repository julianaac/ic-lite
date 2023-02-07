

import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { TechnicalSupportService } from 'src/app/services/technical-support.service';
import { User } from 'src/app/model/user';
import { TechnicalSupport } from 'src/app/model/technicalSupport';
import { Laboratory } from 'src/app/model/laboratory';
import { Training } from 'src/app/model/training';


@Component({
  selector: 'app-list-technical-support',
  templateUrl: './list-technical-support.component.html',
  styleUrls: ['./list-technical-support.component.css'],
})
export class ListTechnicalSupportComponent
  implements OnInit, IList<TechnicalSupport>
{

  registros: TechnicalSupport[] = Array<TechnicalSupport>();
  technical: User[] = Array<User>();
  teacher: User[] = Array<User>();
  laboratory: Laboratory[] = Array<Laboratory>();
  training: Training[] = Array<Training>();

  constructor(private service: TechnicalSupportService) {}

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TechnicalSupport[]) => {
        this.registros = resposta;
      },
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir o Suporte Técnico ?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
        },
      });
    }
  }
  ngOnInit(): void {
    this.get();
  }
}
