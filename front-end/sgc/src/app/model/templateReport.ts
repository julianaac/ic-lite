import { TypeReport } from "./typeReport";
import { User } from "./user";

export interface TemplateReport {

  template_report_id: number;
  template_report_name: string;
  template_report_logo: string;
  template_report_program: string;
  template_report_instituition: string;
  template_report_unit: string; 
  typeReport: TypeReport; //fk
  user: User; //fk
  
}
