import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { IList } from 'src/app/model/i-list';
import { Report } from 'src/app/model/report';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { TemplateReport } from 'src/app/model/templateReport';
import { TypeReport } from 'src/app/model/typeReport';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { ReportService } from 'src/app/services/report.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { Utils } from 'src/app/utils/utils';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.css']
})
export class ListReportComponent implements OnInit, IList<Report> {

  constructor(
    private service: ReportService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  registros: Report[] = Array<Report>();
  user: User[] = Array<User>();
  typereport: TypeReport[] = Array<TypeReport>();
  templatereport: TemplateReport[] = Array<TemplateReport>();
  report_status: String[] = ['CRIADO', 'ENVIADO', 'ARQUIVADO'];

  compareById = Utils.compareById;

    pdfData:any;
  @ViewChild('exemplo') exemplo!: ElementRef; //o decorator é usado para acessar elementos no html, fica mais simples que usar o javascript

  geraPDF(id: number){
    let DATA: any = document.getElementById('exemplo');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 200;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURL = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURL, 'PNG', 2, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    })

    // pdf.save("a4.");
  }

  ngOnInit(): void {
    this.get();
  }
  updateStatus(id: number): void {
    if (confirm('Confirma o envio do relatório?')) {
      this.service.updateStatus(id).subscribe({
        complete: () => {
          this.get();
        }
      });
    }
  }
filterUsers = this.registros.filter(item => item.report_status == 'CRIADO');
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Report[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if (confirm('Deseja realmente excluir o relatório?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
