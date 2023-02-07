import { Task } from "./task"
import { GroupTask } from "./groupTask"

export interface GroupAnswer {
  
  group_answer_id: number;
  group_answer_content: string;
  group_answer_feedback: string;
  group_answer_status: string;
  task: Task; //fk
  group: GroupTask; //fk

}
