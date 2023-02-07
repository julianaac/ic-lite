import { Training } from "./training"
import { Laboratory } from "./laboratory"

export interface Classroom{

 classroom_id: number;
 classroom_name: string;
 classroom_start_date: string;
 classroom_end_date: string;
 training: Training; //fk
 laboratory: Laboratory; //fk
  
}
