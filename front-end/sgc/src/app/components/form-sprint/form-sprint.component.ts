

import { UserService } from 'src/app/services/user.service';
import { Sprint } from './../../model/sprint';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { User } from 'src/app/model/user';
import { TeamService } from 'src/app/services/team.service';
import { SprintService } from 'src/app/services/sprint.service';
import { Team } from 'src/app/model/team';


@Component({
  selector: 'app-form-sprint',
  templateUrl: './form-sprint.component.html',
  styleUrls: ['./form-sprint.component.css'],
})
export class FormSprintComponent implements OnInit, IForm<Sprint> {
  constructor(
    private serviceSprint: SprintService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTeam: TeamService,
    private serviceUser: UserService
    
  ) {}

  team: Team[] = Array<Team>();
  user: User[] = Array<User>();  
  registro: Sprint = <Sprint>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.sprint_id) {
      this.serviceSprint.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/sprint']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceSprint.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceTeam.get().subscribe({
      next: (resposta: Team[]) => {
        this.team = resposta;
      },
    });

    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('sprint_id');
    if (id) {
      this.serviceSprint.getById(+id).subscribe({
        next: (resposta: Sprint) => {
          this.registro = resposta;
        },
      });
    }
  }
}
