import { Situation } from "./situation";
import { TypeUser } from "./typeUser";


export interface User{
  user_id: number;
  user_name: string;
  user_user: string;
  user_password: string;
  user_cpf: string;
  user_registration: string;
  user_curriculum_vitae: string;
  user_email: string;
  user_git: string;
  user_telephone: string;
  user_small_bibliograpy: string;
  situation: Situation; //fk
  typeUser: TypeUser; //fk
}
