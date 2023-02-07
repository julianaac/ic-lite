import { Classroom } from "./classroom"
import { User } from "./user"
import { SocioeconomicComponent } from "../components/pages/socioeconomic/socioeconomic.component"
import { TechnicalKnowledge } from "./technicalKnowledge"
import { Modality } from "./modality"

export interface Student {
  student_id: number;
  classroom: Classroom; //fk
  user: User; //fk
  socioeconomicInformation: SocioeconomicComponent; //fk
  technicalKnowledge: TechnicalKnowledge; //fk
  modality: Modality; //fk

}
