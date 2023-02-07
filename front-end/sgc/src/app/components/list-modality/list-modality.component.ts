import { AlertService } from './../../services/alert.service';
import { ModalityService } from './../../services/modality.service';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Modality } from 'src/app/model/modality';

@Component({
  selector: 'app-list-modality',
  templateUrl: './list-modality.component.html',
  styleUrls: ['./list-modality.component.css']
})
export class ListModalityComponent implements OnInit, IList<Modality> {

  constructor(
    private service: ModalityService,
    private serviceAlert: AlertService
  ) { }


  registros: Modality[] = Array<Modality>();
  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Modality[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir a modalidade?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }
  }



