import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { TypeTechnologyService } from './../../services/type-technology.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { TypeTechnology } from 'src/app/model/typeTechnology';

@Component({
  selector: 'app-list-type-technology',
  templateUrl: './list-type-technology.component.html',
  styleUrls: ['./list-type-technology.component.css']
})
export class ListTypeTechnologyComponent implements OnInit, IList<TypeTechnology> {

  constructor(
    private service: TypeTechnologyService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: TypeTechnology[] = Array<TypeTechnology>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TypeTechnology[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir o tipo de tecnologia?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
}



