// technology_id: number;
// technology_name: string;
// typeTechnology: TypeTechnology; //fk

import { TechnologyService } from './../../services/technology.service';
import { Technology } from './../../model/technology';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TypeTechnologyService } from 'src/app/services/type-technology.service';
import { TypeTechnology } from 'src/app/model/typeTechnology';


@Component({
  selector: 'app-form-technology',
  templateUrl: './form-technology.component.html',
  styleUrls: ['./form-technology.component.css'],
})
export class FormTechnologyComponent implements OnInit, IForm<Technology> {
  [x: string]: any // technology_name: string;
  ;
  constructor(
    private serviceTechnology: TechnologyService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTypeTechnology: TypeTechnologyService
  ) {}

  typeTechnology: TypeTechnology[] = Array<TypeTechnology>();
  registro: Technology = <Technology>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.technology_id) {
      this.serviceTechnology.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceTechnology.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {
    this.serviceTypeTechnology.get().subscribe({
      next: (resposta: TypeTechnology[]) => {
        this.typeTechnology = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('technology_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceTechnology.getById(+id).subscribe({
        next: (resposta: Technology) => {
          this.registro = resposta;
        },
      });
    }
  }
}
