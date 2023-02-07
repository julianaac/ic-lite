import { Task } from "./task"

export interface GroupTask {
  
  group_id: number;
  group_name: string;
  group_member: string;
  task: Task; //fk 

}
