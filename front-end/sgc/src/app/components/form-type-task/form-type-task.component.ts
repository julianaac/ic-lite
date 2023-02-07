import { TypeTask } from './../../model/typeTask';
import { AlertService } from './../../services/alert.service';
import { IForm } from 'src/app/model/i-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTaskService } from 'src/app/services/type-task.service';

@Component({
  selector: 'app-form-typeTask',
  templateUrl: './form-type-task.component.html',
  styleUrls: ['./form-type-task.component.css'],
})
export class FormTypeTaskComponent implements OnInit, IForm<TypeTask> {
  constructor(
    private service: TypeTaskService,
    private servicoAlerta: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  registro: TypeTask = <TypeTask>{};

  submit(form: NgForm): void {
    if (this.registro.type_task_id) {
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
    const id = this.route.snapshot.queryParamMap.get('type_task_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: TypeTask) => {
          this.registro = resposta;
        },
      });
    }
  }
}
