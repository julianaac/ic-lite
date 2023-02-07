
import { Classroom } from "./classroom"
import { Subject } from "./subject"
export interface RecordClass {
  
  record_class_id: number;
  record_class_date_entry: string; // este é datetime no bd.
  record_class_date_exit: string; // este é datetime no bd.
  classroom: Classroom; // fk
  subject: Subject; //fk
  
}
