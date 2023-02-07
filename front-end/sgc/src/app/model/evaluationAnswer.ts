import { Subject } from "./subject"
import { Teacher } from "./teacher"

export interface EvaluationAnswer {

 evaluation_answer_id: number;
 evaluation_answer_name: string;
 evaluation_answer_email: string;
 evaluation_answer_goal_achieved: number;
 evaluation_answer_depth_topic: number;
 evaluation_answer_satisfactory_material:number;
 evaluation_answer_practical_activity:number;
 evaluation_answer_mastery_teacher:number;
 evaluation_answer_discussion_environment:number;
 evaluation_answer_teacher_didactic:number;
 evaluation_answer_ask_question:number;
 evaluation_answer_satisfactory_learning:number;
 evaluation_answer_satisfactory_frequency:number;
 evaluation_answer_satisfactory_infrastructure:number;
 evaluation_answer_satisfactory_themes:number;
 evaluation_answer_is_prerequisite:boolean;  //este era tinyint(1) no bd.
 evaluation_answer_prerequisite:string;
 subject:Subject; //fk
 teacher:Teacher;  //fk
}
