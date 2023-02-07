import { TypeTechnology } from './../../model/typeTechnology';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTechnologyService } from 'src/app/services/type-technology.service';

@Component({
  selector: 'app-form-typeTechnology',
  templateUrl: './form-type-technology.component.html',
  styleUrls: ['./form-type-technology.component.css'],
})
export class FormTypeTechnologyComponent implements OnInit, IForm<TypeTechnology> {
  constructor(
    private service: TypeTechnologyService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: TypeTechnology = <TypeTechnology>{};

  submit(form: NgForm): void {
    if (this.registro.type_technology_id) {
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
    const id = this.route.snapshot.queryParamMap.get('type_technology_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TypeTechnology) => {
          this.registro = resposta;
        },
      });
    }
  }
}
