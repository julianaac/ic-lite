import { TypeReport } from './../../model/typeReport';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeReportService } from 'src/app/services/type-report.service';

@Component({
  selector: 'app-form-typeReport',
  templateUrl: './form-type-report.component.html',
  styleUrls: ['./form-type-report.component.css'],
})
export class FormTypeReportComponent implements OnInit, IForm<TypeReport> {
  constructor(
    private service: TypeReportService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: TypeReport = <TypeReport>{};

  submit(form: NgForm): void {
    if (this.registro.type_report_id) {
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
    const id = this.route.snapshot.queryParamMap.get('type_report_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TypeReport) => {
          this.registro = resposta;
        },
      });
    }
  }
}
