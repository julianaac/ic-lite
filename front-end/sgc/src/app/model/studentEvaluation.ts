import { Subject } from "./subject"
import { Student } from "./student"
import { Teacher } from "./teacher"
import { Training } from "./training"

export interface StudentEvaluation {

  student_evaluation_id: number;
  student_evaluation_is_answer: boolean; //este é tinyint no bd
  subject: Subject; //fk
  student: Student; //fk
  teacher:Teacher; //fk
  training: Training; //fk

}
