import { Student } from './student';
import { Subject } from './subject';

export interface Absence {

  absence_id: number;
  absence_if_justified: boolean;
  absence_date: string;
  student: Student; //fk
  subject: Subject; //fk

}
