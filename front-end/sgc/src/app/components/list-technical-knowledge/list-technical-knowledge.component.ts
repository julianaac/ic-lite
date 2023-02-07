import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/model/i-list';
import { StatusEquipment } from 'src/app/model/statusEquipment';
import { TechnicalKnowledge } from 'src/app/model/technicalKnowledge';
import { AlertService } from 'src/app/services/alert.service';
import { StatusEquipmentService } from 'src/app/services/status-equipment.service';
import { TechnicalKnowledgeService } from 'src/app/services/technical-knowledge.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-technical-knowledge',
  templateUrl: './list-technical-knowledge.component.html',
  styleUrls: ['./list-technical-knowledge.component.css']
})
export class ListTechnicalKnowledgeComponent implements OnInit, IList<TechnicalKnowledge> {

  constructor(
    private service: TechnicalKnowledgeService,
    private serviceAlert: AlertService,
    private statusService: StatusEquipmentService
  ) { }

  status: StatusEquipment[] = Array<StatusEquipment>();
  registros: TechnicalKnowledge[] = Array<TechnicalKnowledge>();

  compareById = Utils.compareById;

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: TechnicalKnowledge[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
   if (confirm('Deseja realmente excluir este conhecimento?')) {
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();
          this.serviceAlert.enviarAlertSucesso();
        }
      });
    }
  }

}
