import { CheckinStudent } from './../../model/checkin-students';
import { ListCheckinStudentsService } from './../../services/list-checkin-students.service';
import { Classroom } from './../../model/classroom';
import { Subject } from './../../model/subject';
import { Student } from './../../model/student';
import { IList } from './../../model/i-list';
import { Component, OnInit } from '@angular/core';
import { Checkin } from 'src/app/model/checkin';
import { CheckinService } from 'src/app/services/checkin.service';
import { ActivatedRoute } from '@angular/router';
declare const $:any;
@Component({
  selector: 'app-list-student-checkin',
  templateUrl: './list-student-checkin.component.html',
  styleUrls: ['./list-student-checkin.component.css']
})
export class ListStudentCheckinComponent implements OnInit, IList<CheckinStudent>{


  registros: CheckinStudent[] = Array<CheckinStudent>();
  student: Student[] = Array<Student>();
  subject: Subject[] = Array<Subject>();
  classroom: Classroom[] = Array<Classroom>();

  constructor(
    private serviceCheckin: ListCheckinStudentsService,
    private route: ActivatedRoute,

  ) {}


  get(termoBusca?: string | undefined): void {
    this.serviceCheckin.get(termoBusca).subscribe({
      next: (resposta: CheckinStudent[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if(confirm('Deseja realmente excluir a capacitação ?')){
      this.serviceCheckin.delete(id).subscribe({
        complete: () => {
          this.get();

        }
      })
    }
  }

  ngOnInit(): void {
    $('#example').DataTable();

    // const id = this.route.snapshot.queryParamMap.get('checkin_entry'); //ao invés de training_id, talvez seja só id
    // if(id == "2022-03-28"){
      this.get();

  }

}
