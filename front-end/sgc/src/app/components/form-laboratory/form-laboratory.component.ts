import { Laboratory } from './../../model/laboratory';
import { AlertService } from './../../services/alert.service';
import { LaboratoryService } from './../../services/laboratory.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-laboratory',
  templateUrl: './form-laboratory.component.html',
  styleUrls: ['./form-laboratory.component.css']
})
export class FormLaboratoryComponent implements OnInit, IForm<Laboratory> {
  constructor(
    private service: LaboratoryService ,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  registro: Laboratory = <Laboratory>{};


  submit(form: NgForm): void {
    if (this.registro.laboratory_id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/home']);
          this.servicoAlerta.enviarAlertSucesso();
        }
      });
    } else {
      this.service.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertSucesso();
        }
      });
    }
  }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Laboratory) => {
          this.registro = resposta;
        }
      });
    }

  }

}
