import { Training } from "./training"
import { TypeNotice } from "./typeNotice"
import { Classroom } from "./classroom"

export interface Notice{
  
  notice_id: number;
  notice_title: string;
  notice_text: string;
  training: Training; //fk
  typeNotice: TypeNotice; //fk
  classroom: Classroom; //fk
  
}
