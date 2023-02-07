
import { SocioeconomicInformation } from 'src/app/model/socioeconomicInformation';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioeconomicInformationService } from 'src/app/services/socioeconomic-information.service';


@Component({
  selector: 'app-form-SocioeconomicInformation',
  templateUrl: './form-socioeconomic-information.component.html',
  styleUrls: ['./form-socioeconomic-information.component.css'],
})
export class FormSocioeconomicInformationComponent
  implements OnInit, IForm<SocioeconomicInformation>
{
  constructor(
    private service: SocioeconomicInformationService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: SocioeconomicInformation = <SocioeconomicInformation>{};

  submit(form: NgForm): void {
    if (this.registro.socioeconomic_information_id) {
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
    const id = this.route.snapshot.queryParamMap.get('socioeconomic_information_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: SocioeconomicInformation) => {
          this.registro = resposta;
        },
      });
    }
  }
}
