import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { Sprint } from 'src/app/model/sprint';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Team } from 'src/app/model/team';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { SprintService } from 'src/app/services/sprint.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './list-sprint.component.html',
  styleUrls: ['./list-sprint.component.css']
})
export class ListSprintComponent implements OnInit, IList<Sprint> {

  constructor(
    private service: SprintService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: Sprint[] = Array<Sprint>();
  team: Team[] = Array<Team>();
  user: User[] = Array<User>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Sprint[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a sprint?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
