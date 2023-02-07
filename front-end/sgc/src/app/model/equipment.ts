import { StatusEquipment } from "./statusEquipment"
import { Training } from "./training"

export interface Equipment{

 equipment_id: number;
 equipment_name: string;
 equipment_description: string;
 equipment_identifier: string;
 statusEquipment: StatusEquipment; //fk
 training: Training; //fk

}
