import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { Training } from 'src/app/model/training';
import { Teacher } from 'src/app/model/teacher';
import { Classroom } from 'src/app/model/classroom';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit, IList<Subject> {

  registros: Subject[] = Array<Subject>();
  training: Training[] = Array<Training>();
  teacher: Teacher[] = Array<Teacher>();
  classroom: Classroom[] = Array<Classroom>();



  constructor(
    private service: SubjectService
  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Subject[]) => {
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
