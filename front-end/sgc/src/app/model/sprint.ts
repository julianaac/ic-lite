import { Team } from "./team"
import { User } from "./user"

export interface Sprint {

  sprint_id: number;
  sprint_name: string;
  sprint_start_date: string;
  sprint_end_date: string;
  sprint_technology_ids: string;
  team: Team; //fk
  user: User; //fk
  
}
