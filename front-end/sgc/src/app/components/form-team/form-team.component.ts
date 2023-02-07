
import { Team } from './../../model/team';
import { AlertService } from './../../services/alert.service';
import { TeamService } from './../../services/team.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css'],
})
export class FormTeamComponent implements OnInit, IForm<Team> {
  constructor(
    private service: TeamService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  registro: Team = <Team>{};

  submit(form: NgForm): void {
    if (this.registro.team_id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/home']);
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    } else {
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('team_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Team) => {
          this.registro = resposta;
        },
      });
    }
  }
}
