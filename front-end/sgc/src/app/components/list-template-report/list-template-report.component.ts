import { IList } from 'src/app/model/i-list';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { TemplateReport } from 'src/app/model/templateReport';
import { TemplateReportService } from 'src/app/services/template-report.service';
import { TypeReport } from 'src/app/model/typeReport';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-templateReport',
  templateUrl: './list-template-report.component.html',
  styleUrls: ['./list-template-report.component.css']
})
export class ListTemplateReportComponent implements OnInit, IList<TemplateReport> {


  constructor(
    private service: TemplateReportService,
    private alertService: AlertService
  ) {}


  registros: TemplateReport[] = Array<TemplateReport>();
  typeReport: TypeReport[] = Array<TypeReport>();
  user: User[] = Array<User>();
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TemplateReport[]) => {
        this.registros = resposta;
        this.alertService.enviarAlertSucesso();

      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir a Template de Relatório ?')){
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
