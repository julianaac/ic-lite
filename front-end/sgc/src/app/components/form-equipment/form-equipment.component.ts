import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { StatusEquipmentService } from './../../services/status-equipment.service';
import { StatusEquipment } from './../../model/statusEquipment';
import { EquipmentService } from './../../services/equipment.service';
import { Equipment } from './../../model/equipment';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-equipment',
  templateUrl: './form-equipment.component.html',
  styleUrls: ['./form-equipment.component.css']
})
export class FormEquipmentComponent implements OnInit, IForm<Equipment> {

  constructor(
    private serviceEquipment: EquipmentService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceStatusEquipment: StatusEquipmentService,
    private serviceTraining: TrainingService,

  ){}

  nameTraining: Training[] = Array<Training>();
  statusEquipment: StatusEquipment[] = Array<StatusEquipment>();
  registro: Equipment = <Equipment>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.equipment_id){
      this.serviceEquipment.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceEquipment.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.nameTraining = resposta;
      }
    });
    this.serviceStatusEquipment.get().subscribe({
      next: (resposta: StatusEquipment[]) => {
        this.statusEquipment = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('equipment_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceEquipment.getById(+id).subscribe({
        next: (resposta: Equipment) => {
          this.registro = resposta;
        }
      });
    }

  }

}
