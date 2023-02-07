// import { ClassroomService } from 'src/app/services/classroom.service';
// import { Classroom } from 'src/app/model/classroom';
// import { Router, ActivatedRoute } from '@angular/router';
// import { SubjectService } from 'src/app/services/subject.service';
// import { StudentService } from 'src/app/services/student.service';
// import { CheckinService } from 'src/app/services/checkin.service';
// import { Student } from 'src/app/model/student';
// import { Component, OnInit } from '@angular/core';
// import { Checkin } from 'src/app/model/checkin';
// import { IForm } from 'src/app/model/i-form';
// import { Subject } from 'src/app/model/subject';
// import { AlertService } from 'src/app/services/alert.service';
// import { User } from 'src/app/model/user';
// import { LoginService } from 'src/app/services/login.service';
// import { Utils } from 'src/app/utils/utils';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-form-checkin',
//   templateUrl: './form-checkin.component.html',
//   styleUrls: ['./form-checkin.component.css']
// })
// export class FormCheckinComponent implements OnInit, IForm<Checkin> {
//   now: string =  new Date().toUTCString();
//   //pegando a data exata
//   // now | date:'dd/MM/yyyy HH:mm': '-05:00'

//   constructor (
//     private service: CheckinService,
//     private serviceStudent: StudentService,
//     private serviceClassroom: ClassroomService,
//     private serviceAlert: AlertService,
//     private serviceSubject: SubjectService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private servicoLogin: LoginService,
//   ) {}

//   classroom: Classroom[] = Array<Classroom>();
//   student: Student[] = Array<Student>();
//   subject: Subject[] = Array<Subject>();
//   registro: Checkin = <Checkin>{};

//   compareById = Utils.compareById;


//   submit(form: NgForm): void {
//     if(this.registro.checkin_id){
//       this.service.update(this.registro).subscribe({
//         complete: () => {
//           this.router.navigate(['/report']);
//           this.serviceAlert.enviarAlertSucesso();
//         }
//       });
//     }else{
//       this.registro.checkin_valid = 1;
//       this.registro.checkin_entry = '03/02/2023 21:55:10';
//       this.registro.checkin_exit = '03/02/2023 21:55:10';

//       this.service.insert(this.registro).subscribe({
//         complete: () => {
//           form.resetForm();
//           this.serviceAlert.enviarAlertSucesso();

//         }
//       })
//     }    }
//   ngOnInit(): void {
//     this.serviceStudent.get().subscribe({
//       next: (resposta: Student[]) => {
//         this.student = resposta;
//       }
//     });
//     this.serviceClassroom.get().subscribe({
//       next: (resposta: Classroom[]) => {
//         this.classroom = resposta;
//       }
//     });
//     this.serviceSubject.get().subscribe({
//       next: (resposta: Subject[]) => {
//         this.subject = resposta;
//       }
//     });

//     const id = this.route.snapshot.queryParamMap.get('checkin_id'); //ao invés de training_id, talvez seja só id

//     if (id) {
//       this.service.getById(+id).subscribe({
//         next: (resposta: Checkin) => {
//           this.registro = resposta;
//         }
//       });
//     }

//   };





//   getUser(): User {
//     return this.servicoLogin.getUser();
//   }


//   getTurma(): Subject{
//     return this.servicoLogin.getTurma();
//   }
//   getStudent(): Student {
//     return this.service.getStudent();
//   }


// }


/**
 form!: FormGroup;
  now: number =  new Date().getHours();
  //pegando a data exata
  // now | date:'dd/MM/yyyy HH:mm': '-05:00'


  registro!: Checkin;
  student!: Student;
// registro:any = CSSNamespaceRule
  ngOnInit(): void {
    const checkin = ';'
    this.form = this.formBuilder.group({
      checkin_id: [],
      checkin_entry: ['03-02-2023 21:55:10'],
      checkin_exit: ['03-02-2023 21:55:10'],
      checkin_status: [],
      checkin_valid: [],
      student: [],
      classroom: [],
      subject: []
    })
    console.log(this.getStudent());
    console.log(this.student);

  }


  constructor (
    private service: CheckinService,
    private serviceStudent: StudentService,
    private serviceAlert: AlertService,
    private serviceSubject: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private servicoLogin: LoginService,
    private formBuilder: NonNullableFormBuilder
  ) {};

  submit() {
    this.service.insert(this.registro).subscribe({
      complete: () => {
        this.form.reset();
        this.serviceAlert.enviarAlertSucesso();
      }
    });
    console.log(this.form.value);
    // this.service.insert(this.form.value).subscribe(data => {

    //   this.form.reset();
    //   this.serviceAlert.enviarAlertSucesso()
    // }
    //   , error => {
    //   console.log('Erro ao fazer o checkin')
    // });

  }

  getUser(): User {
    return this.servicoLogin.getUser();
  }


  getTurma(): Subject{
    return this.servicoLogin.getTurma();
  }
  getStudent(): Student {
    return this.service.getStudent();
  }

 */



  /**<form (ngSubmit)="submit(form)" #form="ngForm">
  <!-- <input type="hidden" name="checkin_id" formControlName=""> -->
  <!-- <input type="hidden" name="checkin_status" [(ngModel)]="status">  -->
 <!-- value="{{now | date:'dd/MM/yyyy HH:mm': '-05:00'}}
  value="{{getUser().user_name}}" -->

  <!-- <div class="form-group">
    <label for=checkin_id>Seu Id</label>
    <input type="hidden" name="checkin_id" [(ngModel)]="registro.checkin_id">
  </div>
  <div class="form-group">
    <label for=checkin_valid>SUA VALIDADE</label>
    <input type="hidden" name="checkin_valid" [(ngModel)]="registro.checkin_valid">
  </div> -->
  <div class="form-group">
    <label for="checkin_entry">HORARIO DE ENTRADA</label>
    <label> {{now | date:'dd/MM/yyyy HH:mm': '-05:00'}}</label>
    <!-- <input type="text" readonly="true" value="{{now | date:'dd/MM/yyyy HH:mm': '-05:00'}}"> -->
  </div>
  <!-- <div class="form-group">
    <label for="checkin_exit">HORARIO DE SAIDA</label>
    <input type="text" name="checkin_exit" formControlName="checkin_exit" #checkin_exit>
  </div> -->

  <div class="form-group">
    <label for="checkin_status">Status</label>
    <select formControlName="checkin_status">
      <option value="null">Selecione</option>
      <option value="on">On</option>
      <option value="off">Off</option>
    </select>
  </div>

  <div class="form-group">
    <label for=student>Nome Completo </label>
    <select [(ngModel)]="registro.student"
    [compareWith]="compareById"
    name="student" required>
      <option *ngFor="let item of student"
      [ngValue]="item"> {{item.user.user_name}} </option>
    </select>
  </div>


  <div class="form-group">
    <label>Turma</label>
    <select [(ngModel)]="registro.classroom"
    [compareWith]="compareById"
    name="classroom" required>
      <option *ngFor="let item of classroom"
      [ngValue]="item"> {{item.classroom_name}} </option>
    </select>
  </div>


  <div class="form-group">
    <label>Disciplina</label>
    <select [(ngModel)]="registro.subject"
    [compareWith]="compareById"
    name="subject" required>
      <option *ngFor="let item of subject"
      [ngValue]="item"> {{item.subject_name}} </option>
    </select>
  </div>

  <input type="submit" value="Cancel" routerLink="../">
  <input type="submit" value="Save" [disabled]="form.invalid">
</form> */
