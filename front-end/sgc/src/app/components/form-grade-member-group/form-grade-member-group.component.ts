import { StudentService } from './../../services/student.service';
import { Student } from './../../model/student';
import { Component, OnInit } from '@angular/core';
import { IForm } from './../../model/i-form';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { GradeMemberGroup } from 'src/app/model/gradeMemberGroup';
import { GradeMemberGroupService } from 'src/app/services/grade-member-group.service';
import { GroupAnswer } from 'src/app/model/groupAnswer';
import { GroupAnswerService } from 'src/app/services/group-answer.service';

@Component({
  selector: 'app-form-grade-member-group',
  templateUrl: './form-grade-member-group.component.html',
  styleUrls: ['./form-grade-member-group.component.css']
})
export class FormGradeMemberGroupComponent implements OnInit, IForm<GradeMemberGroup> {

  constructor(
    private serviceGradeMemberGroup: GradeMemberGroupService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceGroupAnswer: GroupAnswerService,
    private serviceStudent: StudentService,

  ){}

  student: Student[] = Array<Student>();
  groupAnswer: GroupAnswer[] = Array<GroupAnswer>();
  registro: GradeMemberGroup = <GradeMemberGroup>{};
  compareById = Utils.compareById;

  submit(form: NgForm): void {
    if(this.registro.grade_member_group_id){
      this.serviceGradeMemberGroup.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/report']);
          // this.serviceAlert.enviarAlertSucesso();
        }
      });
    }else{
      this.serviceGradeMemberGroup.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          // this.serviceAlert.enviarAlertSucesso();

        }
      })
    }


  }
  ngOnInit(): void {

    this.serviceStudent.get().subscribe({
      next: (resposta: Student[]) => {
        this.student = resposta;
      }
    });
    this.serviceGroupAnswer.get().subscribe({
      next: (resposta: GroupAnswer[]) => {
        this.groupAnswer = resposta;
      }
    });




    const id = this.route.snapshot.queryParamMap.get('grade_member_group_id'); //ao invés de student_id, talvez seja só id

    if (id) {
      this.serviceGradeMemberGroup.getById(+id).subscribe({
        next: (resposta: GradeMemberGroup) => {
          this.registro = resposta;
        }
      });
    }

  }

}
