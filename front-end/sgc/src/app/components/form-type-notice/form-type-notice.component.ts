import { TypeNotice } from './../../model/typeNotice';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeNoticeService } from 'src/app/services/type-notice.service';

@Component({
  selector: 'app-form-typeNotice',
  templateUrl: './form-type-notice.component.html',
  styleUrls: ['./form-type-notice.component.css'],
})
export class FormTypeNoticeComponent implements OnInit, IForm<TypeNotice> {
  constructor(
    private service: TypeNoticeService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: TypeNotice = <TypeNotice>{};

  submit(form: NgForm): void {
    if (this.registro.type_notice_id) {
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
    const id = this.route.snapshot.queryParamMap.get('type_notice_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TypeNotice) => {
          this.registro = resposta;
        },
      });
    }
  }
}
