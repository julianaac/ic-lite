import { TypeReport } from "./typeReport"
import { User } from "./user"
import { TemplateReport } from "./templateReport"

export interface Report {

  report_id: number;
  report_content: number; // este é longtext no bd.
  report_status: string;
  typeReport: TypeReport; //fk
  user: User; //fk
  templateReport: TemplateReport; //fk

}
