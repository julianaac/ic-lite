import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';
import { Classroom } from 'src/app/model/classroom';
import { SocioeconomicComponent } from '../pages/socioeconomic/socioeconomic.component';
import { User } from 'src/app/model/user';
import { TechnicalKnowledge } from 'src/app/model/technicalKnowledge';
import { Modality } from 'src/app/model/modality';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit, IList<Student> {
  
  registros: Student[] = Array<Student>();
  classrooms: Classroom[] = Array<Classroom>();
  users: User[] = Array<User>();
  socioeconomicInformation: SocioeconomicComponent[] = Array<SocioeconomicComponent>();
  technicalKnowledge: TechnicalKnowledge[] = Array<TechnicalKnowledge>();
  modality: Modality[] = Array<Modality>();

  constructor(
    private service: StudentService
  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Student[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir o estudante ?')){
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
