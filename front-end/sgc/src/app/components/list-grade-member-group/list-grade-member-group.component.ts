import { Component, OnInit } from '@angular/core';
import { GradeMemberGroup } from 'src/app/model/gradeMemberGroup';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { AlertService } from 'src/app/services/alert.service';
import { GradeMemberGroupService } from 'src/app/services/grade-member-group.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-grade-member-group',
  templateUrl: './list-grade-member-group.component.html',
  styleUrls: ['./list-grade-member-group.component.css']
})
export class ListGradeMemberGroupComponent implements OnInit, IList<GradeMemberGroup> {

  constructor(
    private service: GradeMemberGroupService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: GradeMemberGroup[] = Array<GradeMemberGroup>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: GradeMemberGroup[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir nota de grupo?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
