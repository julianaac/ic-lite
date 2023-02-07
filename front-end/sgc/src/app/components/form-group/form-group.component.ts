// ESTES SÃO OS ATRIBUTOS QUE ESTÃO NA MODEL GROUP:

// group_id: number;
// group_name: string;
// group_member: string;
// task: Task; //fk 
// POSSSUE APENAS UMA CHAVE ESTRANGEIRA.

import { GroupTaskService } from './../../services/group.service';
import { GroupTask } from '../../model/groupTask';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit, IForm<GroupTask> {
  [x: string]: any; // group_name: string;
  constructor(
    private serviceGroupTask: GroupTaskService,
    private serviceUser: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceTask: TaskService
  ) {}

  task: Task[] = Array<Task>();
  user: User[] = Array<User>();
  selectedUsers: User[] = Array<User>();
  registro: GroupTask = <GroupTask>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if (this.registro.group_id) {
      this.serviceGroupTask.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    } else {
      const userIds = this.selectedUsers.map(user => user.user_id).join(',');
      this.registro.group_member = userIds;
      this.serviceGroupTask.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();
        },
      });
    }
  }
  // AQUI INICIA O BLOCO DE CÓDIGO COM CHAVE ESTRANGEIRA!
  ngOnInit(): void {
    this.serviceTask.get().subscribe({
      next: (resposta: Task[]) => {
        this.task = resposta;
      },
    });
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
        this.user = resposta;
      },
    });
    // AQUI FINALIZA O BLOCO DE CÓDIGO COM CHAVE ESTRANGEIRA!

    const id = this.route.snapshot.queryParamMap.get('group_id'); //ao invés de training_id, talvez seja só id

    if (id) {
      this.serviceGroupTask.getById(+id).subscribe({
        next: (resposta: GroupTask) => {
          this.registro = resposta;
        },
      });
    }
  }
  onUserSelected(user: User) {
    if (this.selectedUsers.includes(user)) {
      this.selectedUsers = this.selectedUsers.filter(u => u !== user);
    } else {
      this.selectedUsers.push(user);
    }
  }
}

