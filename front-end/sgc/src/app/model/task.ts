import { Subject } from "./subject"
import { TypeTask } from "./typeTask"

export interface Task {
  
  task_id: number;
  task_name: string;
  task_description: string;
  task_file: string;
  task_start: string; //este era datime no bd.
  task_end: string; //este era datime no bd.
  task_status: string;
  subject: Subject; //fk
  typeTask: TypeTask; //fk
 
}
