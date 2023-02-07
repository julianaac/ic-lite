import { StatusEquipment } from './../../model/statusEquipment';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/model/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit, IList<Equipment> {

  registros: Equipment[] = Array<Equipment>();
  status: StatusEquipment[] = Array<StatusEquipment>();

  constructor(
    private service: EquipmentService
  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Equipment[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir o Equipamento ?')){
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();

        }
      })
    }
  }
  ngOnInit(): void {
    this.get();
  }

}
