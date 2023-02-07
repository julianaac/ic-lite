import { TaskService } from './../../services/task.service';
import { Task } from './../../model/task';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { SubjectService } from 'src/app/services/subject.service';
import { TypeTaskService } from 'src/app/services/type-task.service';
import { Subject } from 'src/app/model/subject';
import { TypeTask } from 'src/app/model/typeTask';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit, IForm<Task> {

  constructor(
    private serviceTask: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceSubject: SubjectService,
    private serviceTypeTask: TypeTaskService,
    private servicoLogin: LoginService,


  ){}

  subject: Subject[] = Array<Subject>();
  typeTask: TypeTask[] = Array<TypeTask>();
  registro: Task = <Task>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.task_id){
      this.serviceTask.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceTask.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceSubject.getSubjectTeacher(this.servicoLogin.getUser().user_id).subscribe({
      next: (resposta: Subject[]) => {
        this.subject = resposta;
      }
    });
    this.serviceTypeTask.get().subscribe({
      next: (resposta: TypeTask[]) => {
        this.typeTask = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('task_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceTask.getById(+id).subscribe({
        next: (resposta: Task) => {
          this.registro = resposta;
        }
      });
    }

  }

}
