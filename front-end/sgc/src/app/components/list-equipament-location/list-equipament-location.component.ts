import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/model/classroom';
import { Equipment } from 'src/app/model/equipment';
import { EquipmentLocation } from 'src/app/model/equipmentLocation';
import { IList } from 'src/app/model/i-list';
import { Laboratory } from 'src/app/model/laboratory';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { Student } from 'src/app/model/student';
import { Training } from 'src/app/model/training';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { EquipmentLocationService } from 'src/app/services/equipment-location.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-equipament-location',
  templateUrl: './list-equipament-location.component.html',
  styleUrls: ['./list-equipament-location.component.css']
})
export class ListEquipamentLocationComponent implements OnInit, IList<EquipmentLocation> {

  constructor(
    private service: EquipmentLocationService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: EquipmentLocation[] = Array<EquipmentLocation>();
  student: Student[] = Array<Student>();
  equipment: Equipment[] = Array<Equipment>();
  laboratory: Laboratory[] = Array<Laboratory>();
  training: Training[] = Array<Training>();
  classroom: Classroom[] = Array<Classroom>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: EquipmentLocation[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a localização do equipamento?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
