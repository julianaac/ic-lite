import { Subject } from './../../model/subject';
import { TypeTask } from './../../model/typeTask';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit, IList<Task> {

  registros: Task[] = Array<Task>();
  subject: Subject[] = Array<Subject>();
  typeTask: TypeTask[] = Array<TypeTask>();

  constructor(
    private service: TaskService
  ) {}


  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: Task[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir a atividade ?')){
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
