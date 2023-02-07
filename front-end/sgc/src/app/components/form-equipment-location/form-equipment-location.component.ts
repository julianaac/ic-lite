// equipment_location_id: number;
// equipment_location_period: string;

// student: Student; //fk
// equipment: Equipment; //fk
// laboratory: Laboratory; //fk
// training: Training; //fk
// classroom: Classroom; //fk

import { EquipmentLocation } from './../../model/equipmentLocation';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/app/model/training';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { EquipmentLocationService } from 'src/app/services/equipment-location.service';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Equipment } from 'src/app/model/equipment';
import { Laboratory } from 'src/app/model/laboratory';
import { Classroom } from 'src/app/model/classroom';


@Component({
  selector: 'app-form-equipmentLocation',
  templateUrl: './form-equipment-location.component.html',
  styleUrls: ['./form-equipment-location.component.css'],
})
export class FormEquipmentLocationComponent
  implements OnInit, IForm<EquipmentLocation>
{
  constructor(
    private serviceEquipmentLocation: EquipmentLocationService,
    private router: Router,
    private route: ActivatedRoute,

    private serviceStudent: StudentService,
    private serviceEquipment: EquipmentService,
    private serviceLaboratory: LaboratoryService,
    private serviceTraining: TrainingService,
    private serviceClassroom: ClassroomService
  ) {}

  student: Student[] = Array<Student>();
  equipment: Equipment[] = Array<Equipment>();
  laboratory: Laboratory[] = Array<Laboratory>();
  training: Training[] = Array<Training>();
  classroom: Classroom[] = Array<Classroom>();

  registro: EquipmentLocation = <EquipmentLocation>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.equipment_location_id) {
      this.serviceEquipmentLocation.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/technicalsupport']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceEquipmentLocation.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    
    this.serviceStudent.get().subscribe({
      next: (resposta: Student[]) => {
        this.student = resposta;
      },
    });

    this.serviceEquipment.get().subscribe({
      next: (resposta: Equipment[]) => {
        this.equipment = resposta;
      },
    });

    this.serviceLaboratory.get().subscribe({
      next: (resposta: Laboratory[]) => {
        this.laboratory = resposta;
      },
    });

    this.serviceTraining.get().subscribe({
      next: (resposta: Training[]) => {
        this.training = resposta;
      },
    });

    this.serviceClassroom.get().subscribe({
      next: (resposta: Classroom[]) => {
        this.classroom = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('equipment_location_id');
    if (id) {
      this.serviceEquipmentLocation.getById(+id).subscribe({
        next: (resposta: EquipmentLocation) => {
          this.registro = resposta;
        },
      });
    }
  }
}
