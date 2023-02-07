import { ConfigComponent } from './components/pages/config/config.component';
import { SubjectComponent } from './components/pages/subject/subject.component';
import { FormTrainingComponent } from './components/form-training/form-training.component';
import { FormLaboratoryComponent } from './components/form-laboratory/form-laboratory.component';
import { SocioeconomicComponent } from './components/pages/socioeconomic/socioeconomic.component';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ReportComponent } from './components/pages/report/report.component';
import { CheckComponent } from './components/pages/check/check.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './components/pages/training/training.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { ClassroomComponent } from './components/pages/classroom/classroom.component';
import { FormModalityComponent } from './components/form-modality/form-modality.component';
import { ListTypeUserComponent } from './components/list-type-user/list-type-user.component';
import { UserComponent } from './components/pages/user/user.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';

const routes: Routes = [
 { path: '', canActivate: [AuthenticationGuard],  children: [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_TECNICO_INFRAESTRUTURA',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO',
                    'ROLE_SPONSOR' ]}, component: HomeComponent },

  { path: 'training', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_PROFESSOR' ]}, component: TrainingComponent},

  { path: 'user', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO']}, component: UserComponent},


  { path: 'classroom',canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_PROFESSOR' ]}, component: ClassroomComponent},


  { path: 'check', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO']}, component: CheckComponent},


  { path: 'report', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO' ]}, component: ReportComponent},


  { path: 'teacher', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO' ]}, component: TeacherComponent},

  { path: 'activity', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO' ]}, component: ActivityComponent},

  { path: 'socioeconomic', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO',
                    'ROLE_SPONSOR' ]}, component: SocioeconomicComponent},


  { path: 'subject', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO', ]},component: SubjectComponent},

  { path: 'myprofile', canActivate: [AuthenticationGuard],
    data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA',
                    'ROLE_COORDENADOR_DO_PROJETO',
                    'ROLE_COORDENADOR_PEDAGOGICO',
                    'ROLE_TECNICO_ADMINISTRATIVO',
                    'ROLE_TECNICO_INFRAESTRUTURA',
                    'ROLE_PROFESSOR',
                    'ROLE_ALUNO',
                    'ROLE_SPONSOR' ]},component: MyProfileComponent},


  { path: 'config', canActivate: [AuthenticationGuard], data: {papel: ['ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA', 'ROLE_COORDENADOR_DO_PROJETO', ]}, children: [
            { path: 'typeuser', component: ListTypeUserComponent},
            { path: 'report/form', component: FormLaboratoryComponent },
            { path: 'modality/form', component: FormModalityComponent },
            { path: 'training/form', component: FormTrainingComponent}], component: ConfigComponent}, 
 ]},

 { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*  TIPOS DE USUÁRIOS */
/*

(1, 'ROLE_COORDENADOR_DO_PROJETO'),
(2, 'ROLE_COORDENADOR_PEDAGOGICO'),
(3, 'ROLE_ANALISTA_DESENVOLVEDOR_SISTEMA'),
(4, 'ROLE_TECNICO_INFRAESTRUTURA'),
(5, 'ROLE_TECNICO_ADMINISTRATIVO'),
(6, 'ROLE_SPONSOR'),
(7, 'ROLE_PROFESSOR'),
(8, 'ROLE_ALUNO');

 */
