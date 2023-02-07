import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from 'src/app/model/classroom';
import { IForm } from 'src/app/model/i-form';
import { Modality } from 'src/app/model/modality';
import { SocioeconomicInformation } from 'src/app/model/socioeconomicInformation';
import { Student } from 'src/app/model/student';
import { TechnicalKnowledge } from 'src/app/model/technicalKnowledge';
import { User } from 'src/app/model/user';
import { ClassroomService } from 'src/app/services/classroom.service';
import { ModalityService } from 'src/app/services/modality.service';
import { SocioeconomicInformationService } from 'src/app/services/socioeconomic-information.service';
import { StudentService } from 'src/app/services/student.service';
import { TechnicalKnowledgeService } from 'src/app/services/technical-knowledge.service';
import { UserService } from 'src/app/services/user.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})

export class FormStudentComponent implements OnInit, IForm<Student> {
  constructor(
    private service: StudentService,
    private serviceUser: UserService,
    private serviceClassroom: ClassroomService,
    private serviceSocioeconomicInformation: SocioeconomicInformationService,
    private serviceTechnicalKnowledge: TechnicalKnowledgeService,
    private serviceModality: ModalityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  registro: Student = <Student>{};
  users: User[] = Array<User>();
  classrooms: Classroom[] = Array<Classroom>();
  technicalKnowledges: TechnicalKnowledge[] = Array<TechnicalKnowledge>();
  socioeconomicInformations: SocioeconomicInformation[] = Array<SocioeconomicInformation>();
  modalitys: Modality[] =  Array<Modality>();
  compareById = Utils.compareById;
  submit(form: NgForm): void {
    if (this.registro.student_id) {
      this.service.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/student']);
          // this.alertService.sendOk();
        },
      });
    } else {
      this.service.insert(this.registro).subscribe({
        
        complete: () => {
          form.resetForm();
          // this.alertService.sendOk();
        },
      });
    }
  }
  ngOnInit(): void {

    this.serviceClassroom.get().subscribe({
      next: (resposta: Classroom[]) => {
          this.classrooms = resposta;
      }
    });
    this.serviceUser.get().subscribe({
      next: (resposta: User[]) => {
          this.users = resposta;
      }
    });
  
    this.serviceModality.get().subscribe({
      next: (resposta: Modality[]) => {
          this.modalitys = resposta;
      }
    });
    this.serviceSocioeconomicInformation.get().subscribe({
      next: (resposta: SocioeconomicInformation[]) => {
          this.socioeconomicInformations = resposta;
      }
    });

    this.serviceTechnicalKnowledge.get().subscribe({
      next: (resposta: TechnicalKnowledge[]) => {
          this.technicalKnowledges = resposta;
      }
    });
    const id = this.route.snapshot.queryParamMap.get('student_id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Student) => {
          this.registro = resposta;
        },
      });
    }

  }
}
