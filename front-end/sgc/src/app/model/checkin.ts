import { Student } from "./student"
import { Classroom } from "./classroom"
import { Subject } from "./subject"

export interface Checkin{
  checkin_id: number | object;
  checkin_entry: string;
  checkin_exit: string;
  checkin_status: number;
  checkin_valid: number;
  student: Student; //fk
  classroom: Classroom; //fk
  subject: Subject; //fk

}
