import {Situation } from './../../model/situation';
import { AlertService } from './../../services/alert.service';
import {SituationService } from './../../services/situation.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-situation',
  templateUrl: './form-situation.component.html',
  styleUrls: ['./form-situation.component.css'],
})
export class FormSituationComponent implements OnInit, IForm<Situation> {
  constructor(
    private service:SituationService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro:Situation = <Situation>{};

  submit(form: NgForm): void {
    if (this.registro.situation_id) {
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
    const id = this.route.snapshot.queryParamMap.get('situation_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta:Situation) => {
          this.registro = resposta;
        },
      });
    }
  }
}
