import { GroupAnswer } from "./groupAnswer"
import { Student } from "./student"

export interface GradeMemberGroup {

  grade_member_group_id: number;
  grade_member_group_feedback: string;
  grade_member_group_grade: number;
  groupAnswer: GroupAnswer; //fk 
  student: Student; //fk

}
