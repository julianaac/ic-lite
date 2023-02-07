
import { TrainingService } from './../../services/training.service';
import { Training } from './../../model/training';
import { TypeReport } from 'src/app/model/typeReport';
import { UserService } from 'src/app/services/user.service';
import { TemplateReportService } from 'src/app/services/template-report.service';
import { ReportService } from './../../services/report.service';
import { Report } from './../../model/report';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TypeReportService } from 'src/app/services/type-report.service';
import { TemplateReport } from 'src/app/model/templateReport';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-form-report',
  templateUrl: './form-report.component.html',
  styleUrls: ['./form-report.component.css'],
})
export class FormReportComponent implements OnInit, IForm<Report> {
  constructor(
    private serviceReport: ReportService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTypeReport: TypeReportService,
    private serviceUser: UserService,
    private serviceTemplateReport: TemplateReportService
  ) {}

  typeReport: TypeReport[] = Array<TypeReport>();
  user: User[] = Array<User>();
  templateReport: TemplateReport[] = Array<TemplateReport>();
  registro: Report = <Report>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.report_id) {
      this.serviceReport.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      this.serviceReport.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  ngOnInit(): void {

    this.serviceTypeReport.get().subscribe({
      next: (resposta: TypeReport[]) => {
        this.typeReport = resposta;
      },
    });

    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });
    
    this.serviceTemplateReport.get().subscribe({
      next: (resposta: TemplateReport[]) => {
        this.templateReport = resposta;
      },
    });

    const id = this.route.snapshot.queryParamMap.get('report_id'); 
    if (id) {
      this.serviceReport.getById(+id).subscribe({
        next: (resposta: Report) => {
          this.registro = resposta;
        },
      });
    }
  }
}
