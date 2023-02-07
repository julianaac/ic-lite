import { Sprint } from "./sprint"

export interface TaskSprint {

  task_sprint_id: number;
  task_sprint_name: string;
  task_sprint_description: string;
  task_sprint_start: string;
  task_sprint_end: string;
  task_sprint_description_conflict: string;
  task_sprint_completion_level: number; // este era double no bd.
  task_sprint_responsible_ids: string; 
  task_sprint_responsible_conflict_ids: string; 
  sprint: Sprint; //fk

}
