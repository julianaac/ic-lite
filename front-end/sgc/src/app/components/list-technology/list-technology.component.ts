import { TechnologyService } from './../../services/technology.service';
import { TypeTechnology } from 'src/app/model/typeTechnology';
import { Technology } from './../../model/technology';
import { IList } from 'src/app/model/i-list';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-list-technology',
  templateUrl: './list-technology.component.html',
  styleUrls: ['./list-technology.component.css']
})
export class ListTechnologyComponent implements OnInit, IList<Technology> {


  constructor(
    private service: TechnologyService,
    private alertService: AlertService
  ) {}


  registros: Technology[] = Array<Technology>();
  typeTechnology: TypeTechnology[] = Array<TypeTechnology>();
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Technology[]) => {
        this.registros = resposta;
        this.alertService.enviarAlertSucesso();

      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir a Técnologia ?')){
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.alertService.enviarAlertSucesso();

        }
      })
    }
  }
  ngOnInit(): void {
    this.get();
  }

}
