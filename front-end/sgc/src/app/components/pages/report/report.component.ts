import { ReportService } from './../../../services/report.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Report } from 'src/app/model/report';
import { IList } from 'src/app/model/i-list';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit, IList<Report> {

  constructor(
    private service: ReportService,
    private servicoLogin: LoginService
  ) { }
  registros: Report[] = Array<Report>();
  report_status: string[] = ['CRIADO', 'ENVIADO'];
  report: Report = <Report>{};



  get(termoBusca?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.service.getById(1).subscribe({
      next: (res: Report) => {
        this.report = res;
      }
    })
  }

  updateStatus(id: number): void {
    if (confirm('Confirma alteração no status do agendamento?')) {
      this.service.updateStatus(id).subscribe({
        complete: () => {
          this.get();
        }
      });
    }
  }


  @ViewChild('exemplo') exemplo!: ElementRef; //o decorator é usado para acessar elementos no html, fica mais simples que usar o javascript

  geraPDF(){
    let PDF = new jsPDF('p', 'mm', 'a4');
    let DATA: any = document.getElementById('exemplo');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 200;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURL = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURL, 'PNG', 5, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    })

    // pdf.save("a4.");
  // }

  // uploadFile(event: any) {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   this.service.insert('http://localhost:8080/upload', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.error(err)
  //   );
  // }
}

getUser(): User {
  return this.servicoLogin.getUser();
}
isCoord(): boolean {
  return this.servicoLogin.isCoord();
}

isAdmin(): boolean {
  return this.servicoLogin.isAdmin();
}

isAluno(): boolean {
  return this.servicoLogin.isAluno();
}

isProfessor(): boolean {
  return this.servicoLogin.isProfessor();
}
getUsuario(): User {
  return this.servicoLogin.getUser();
}

}
