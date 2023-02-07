import { User } from "./user"
import { Task } from "./task"

export interface SingleAnswer {
  
  single_answer_id: number;
  single_answer_content: string;
  single_answer_feedback: string | null;
  single_answer_grade: number | null; //este é double no bd.
  single_answer_status: string;
  user: User; //fk
  task: Task; //fk

}
