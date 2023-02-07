import { AlertService } from './../../services/alert.service';
import { User } from './../../model/user';
import { TrainingService } from './../../services/training.service';
import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { Training } from 'src/app/model/training';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.css']
})
export class ListTrainingComponent implements OnInit, IList<Training> {
  registros: Training[] = Array<Training>();
  user: User[] =  Array<User>();

  constructor(
    private service: TrainingService,
    private alertService: AlertService
  ) {}

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Training[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir a capacitação ?')){
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
