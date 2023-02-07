import { Training } from "./training";
import { User } from "./user";


export interface Admin {
  admin_id: number;
  training: Training;
  user: User;
}
