import { StatusEquipment } from './../../model/statusEquipment';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';

@Component({
  selector: 'app-form-statusEquipment',
  templateUrl: './form-status-equipment.component.html',
  styleUrls: ['./form-status-equipment.component.css'],
})
export class FormStatusEquipmentComponent implements OnInit, IForm<StatusEquipment> {
  constructor(
    private service: StatusEquipmentService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: StatusEquipment = <StatusEquipment>{};

  submit(form: NgForm): void {
    if (this.registro.status_equipment_id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/home']);
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    } else {
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertSucesso();
        },
      });
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('type_task_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: StatusEquipment) => {
          this.registro = resposta;
        },
      });
    }
  }
}
