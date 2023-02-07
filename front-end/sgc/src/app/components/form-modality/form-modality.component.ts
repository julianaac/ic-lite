import { Modality } from './../../model/modality';
import { AlertService } from './../../services/alert.service';
import { ModalityService } from './../../services/modality.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form-modality',
  templateUrl: './form-modality.component.html',
  styleUrls: ['./form-modality.component.css']
})
export class FormModalityComponent implements OnInit, IForm<Modality> {
  form = this.formBuilder.group({
    modality_code : [''],
    modality_name : ['']
  });

  constructor(
    private service: ModalityService ,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder) {
     }
  registro: Modality = <Modality>{};
  onCancel(){

  }
  resetForm() {
    this.form.reset();
  }
  submit(){
    this.service.insert(this.form.value)
    .subscribe(data => {
      this.form.reset();
      this.servicoAlerta.enviarAlertSucesso()

    }
      , error => {
      console.log('Erro ao salvar modalidade')
    });


    // console.log(this.form.value);
    // if (this.registro.modality_id) {
    //   this.service.update(this.registro).subscribe({
    //     complete: () => {
    //       this.router.navigate(['/home']);
    //       this.servicoAlerta.enviarAlertSucesso();
    //     }
    //   });
    // } else {
    //   this.service.insert(this.registro).subscribe({
    //     complete: () => {
    //       // form.resetForm();
    //       this.servicoAlerta.enviarAlertSucesso();
    //     }
    //   });
    // }
  }

  ngOnInit(): void {
    this.form.value.modality_name = 'Chameison';
    // this.form = this.formBuilder.group({
    //   modality_code: [''],
    //   modality_name: ['']
    // })
    // const id = this.route.snapshot.queryParamMap.get('id');
    // if (id) {
    //   this.service.getById(+id).subscribe({
    //     next: (resposta: Modality) => {
    //       this.registro = resposta;
    //     }
    //   });
    // }

  }

}
