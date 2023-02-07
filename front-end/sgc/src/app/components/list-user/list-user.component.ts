import { IList } from './../../model/i-list';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Modality } from 'src/app/model/modality';
import { TypeUser } from 'src/app/model/typeUser';
import { TypeUserService } from 'src/app/services/type-user.service';
import { SituationService } from 'src/app/services/situation.service';
import { Situation } from 'src/app/model/situation';
import { Subject } from 'rxjs';

@Component({

  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, IList<User> {

  dtoptions: DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject<any>();

  registros: User[] = Array<User>();
  situation: Situation[] = Array<Situation>();
  typeUser: TypeUser[] = Array<TypeUser>();

  constructor(
    private service: UserService,
    private serviceTypeUser: TypeUserService,
    private serviceSituation: SituationService,
  ) {}
  get(termoBusca?: string | undefined): void {
    this.service.get(termoBusca).subscribe({
      next: (resposta: User[]) => {
        this.registros = resposta;
        this.dtTrigger.next(null);
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir o Usuário ?')){
      this.service.delete(id).subscribe({
        complete: () => {
          this.get();

        }
      })
    }
  }
  ngOnInit(): void {
    this.dtoptions ={
      pagingType: 'full_numbers',
      searching: true,
      //paging: false, //remover a paginação
      lengthChange: false,
      language:{
        searchPlaceholder: 'Busque'
      },
      scrollX: true,
      info: false
    }
    this.get();
  }

}
