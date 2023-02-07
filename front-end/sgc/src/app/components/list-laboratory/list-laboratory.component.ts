import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { LaboratoryService } from './../../services/laboratory.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Laboratory } from 'src/app/model/laboratory';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-laboratory',
  templateUrl: './list-laboratory.component.html',
  styleUrls: ['./list-laboratory.component.css']
})
export class ListLaboratoryComponent implements OnInit, IList<Laboratory> {

  constructor(
    private service: LaboratoryService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: Laboratory[] = Array<Laboratory>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Laboratory[]) => {
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



