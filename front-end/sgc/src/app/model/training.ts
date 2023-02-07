
import { User } from "./user"
export interface Training{
  training_id: number;
  training_name: string;
  training_workload: number;
  training_start_date: string;
  training_end_date: string;
  user: User;
}
