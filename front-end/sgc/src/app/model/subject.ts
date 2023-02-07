import { Training } from "./training"
import { Teacher } from "./teacher"
import { Classroom } from "./classroom"

export interface Subject {

  subject_id: number;
  subject_name: string;
  subject_end_date: Date;
  subject_start_date: Date;
  subject_workload: number;
  subject_number_class: number;
  training: Training;  //fk
  teacher: Teacher; //fk
  classroom: Classroom; //fk

}
