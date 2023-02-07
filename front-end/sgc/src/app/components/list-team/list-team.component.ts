import { AlertService } from './../../services/alert.service';
import { TeamService } from './../../services/team.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/team';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit, IList<Team> {

  constructor(
    private service: TeamService,
    private serviceAlert: AlertService,
  ) { }

  registros: Team[] = Array<Team>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Team[]) => {
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



