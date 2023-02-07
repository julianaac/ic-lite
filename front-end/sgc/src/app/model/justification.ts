import { Student } from "./student"
import { RecordClass } from "./recordClass"
import { Absence } from "./absence"

export interface Justification {
  justification_id: number;
  justification_text: string;
  justification_file: string;
  student: Student; //fk
  recordClass: RecordClass; //fk
  absence: Absence; //fk
}
