import { Training } from './../../model/training';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/model/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Laboratory } from 'src/app/model/laboratory';

@Component({
  selector: 'app-list-classroom',
  templateUrl: './list-classroom.component.html',
  styleUrls: ['./list-classroom.component.css']
})
export class ListClassroomComponent implements OnInit, IList<Classroom> {

  registros: Classroom[] = Array<Classroom>();
  training: Training[] = Array<Training>();
  laboratory: Laboratory[] = Array<Laboratory>();

  constructor(
    private service: ClassroomService
  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Classroom[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir o Equipamento ?')){
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();

        }
      })
    }
  }
  ngOnInit(): void {
    this.get();
  }

}
