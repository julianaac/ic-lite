
export interface CheckinStudent{
  student_id: number;
  checkin_entry: string;
  checkin_exit: string;
  student_name: string; //fk
  student_classroom_fk: string; //fk
  subject_name: string; //fk
  amount_hours: string;
}
