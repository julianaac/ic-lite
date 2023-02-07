
import { User } from "./user";
import { Laboratory } from "./laboratory";
import { Training } from "./training";

export interface TechnicalSupport {

  technical_support_id: number;
  technical_support_description: string;
  technical_support_status: string;
  technical: User; //fk
  teacher: User; //fk
  laboratory: Laboratory; //fk
  training: Training; //fk

}
