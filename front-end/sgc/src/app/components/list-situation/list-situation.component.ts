import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { SituationService } from './../../services/situation.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { Situation } from 'src/app/model/situation';

@Component({
  selector: 'app-list-situation',
  templateUrl: './list-situation.component.html',
  styleUrls: ['./list-situation.component.css']
})
export class ListSituationComponent implements OnInit, IList<Situation> {

  constructor(
    private service: SituationService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: Situation[] = Array<Situation>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Situation[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a situação?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
}



