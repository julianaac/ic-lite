import { Training } from "./training"
import { User } from "./user"

export interface Teacher {

 teacher_id: number;
 training: Training;  //fk
 user: User; //fk
  
}
