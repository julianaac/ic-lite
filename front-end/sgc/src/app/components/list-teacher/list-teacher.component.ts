import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { User } from 'src/app/model/user';
import { Training } from 'src/app/model/training';
import { TrainingService } from 'src/app/services/training.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit, IList<Teacher> {
  
  registros: Teacher[] = Array<Teacher>();
  training: Training[] = Array<Training>();
  users: User[] = Array<User>();
  

  constructor(
    private service: TeacherService,
    private serviceTraining: TrainingService,
    private serviceUser: UserService

  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Teacher[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir o professor ?')){
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
