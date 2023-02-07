import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { TemplateReport } from 'src/app/model/templateReport';
import { TemplateReportService } from 'src/app/services/template-report.service';
import { TypeReport } from 'src/app/model/typeReport';
import { TypeReportService } from 'src/app/services/type-report.service';

@Component({
  selector: 'app-form-template_report',
  templateUrl: './form-template-report.component.html',
  styleUrls: ['./form-template-report.component.css']
})
export class FormTemplateReportComponent implements OnInit, IForm<TemplateReport> {

  constructor(
    private serviceTemplateReport: TemplateReportService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTypeReport:TypeReportService,
    private serviceUser: UserService,

  ) { }

  user: User[] = Array<User>();
 typeReport:TypeReport[] = Array<TypeReport>();
  registro: TemplateReport = <TemplateReport>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.template_report_id) {
      this.serviceTemplateReport.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    } else {
      this.serviceTemplateReport.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      }
    });
    this.serviceTypeReport.get().subscribe({
      next: (resposta:TypeReport[]) => {
        this.typeReport = resposta;
      }
    });

    const id = this.route.snapshot.queryParamMap.get('template_report_id'); //ao invés de user_id, talvez seja só id

    if (id) {
      this.serviceTemplateReport.getById(+id).subscribe({
        next: (resposta: TemplateReport) => {
          this.registro = resposta;
        }
      });
    }

  }

}
