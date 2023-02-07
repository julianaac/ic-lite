import { Student } from "./student"
import { Equipment } from "./equipment"
import { Laboratory } from "./laboratory"
import { Training } from "./training"
import { Classroom } from "./classroom"

export interface EquipmentLocation {
    
  equipment_location_id: number;
  equipment_location_period: string;
  student: Student; //fk
  equipment: Equipment; //fk
  laboratory: Laboratory; //fk
  training: Training; //fk
  classroom: Classroom; //fk

}
