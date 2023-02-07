import { ListReportComponent } from './components/list-report/list-report.component';
import { FormCheckinComponent } from './components/form-checkin/form-checkin.component';
import { FormEvaluationAnswerComponent } from './components/form-evaluation-answer/form-evaluation-answer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormAbsenceComponent } from './components/form-absence/form-absence.component';
import { FormClassroomComponent } from './components/form-classroom/form-classroom.component';
import { FormEquipmentComponent } from './components/form-equipment/form-equipment.component';
import { FormGradeMemberGroupComponent } from './components/form-grade-member-group/form-grade-member-group.component';
import { FormGroupAnswerComponent } from './components/form-group-answer/form-group-answer.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormLaboratoryComponent } from './components/form-laboratory/form-laboratory.component';
import { FormModalityComponent } from './components/form-modality/form-modality.component';
import { FormNoticeComponent } from './components/form-notice/form-notice.component';
import { FormRecordClassComponent } from './components/form-record-class/form-record-class.component';
import { FormSituationComponent } from './components/form-situation/form-situation.component';
import { FormSocioeconomicInformationComponent } from './components/form-socioeconomic-information/form-socioeconomic-information.component';

import { FormStatusEquipmentComponent } from './components/form-status-equipment/form-status-equipment.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { FormSubjectComponent } from './components/form-subject/form-subject.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { FormTeacherComponent } from './components/form-teacher/form-teacher.component';
import { FormTeamComponent } from './components/form-team/form-team.component';
import { FormTechnicalKnowledgeComponent } from './components/form-technical-knowledge/form-technical-knowledge.component';
import { FormTechnologyComponent } from './components/form-technology/form-technology.component';
import { FormTemplateReportComponent } from './components/form-template-report/form-template-report.component';
import { FormTrainingComponent } from './components/form-training/form-training.component';
import { FormTypeNoticeComponent } from './components/form-type-notice/form-type-notice.component';
import { FormTypeReportComponent } from './components/form-type-report/form-type-report.component';
import { FormTypeTaskComponent } from './components/form-type-task/form-type-task.component';
import { FormTypeTechnologyComponent } from './components/form-type-technology/form-type-technology.component';
import { FormTypeUserComponent } from './components/form-type-user/form-type-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ListClassroomComponent } from './components/list-classroom/list-classroom.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { ListLaboratoryComponent } from './components/list-laboratory/list-laboratory.component';
import { ListModalityComponent } from './components/list-modality/list-modality.component';
import { ListSituationComponent } from './components/list-situation/list-situation.component';
import { ListStudentCheckinComponent } from './components/list-student-checkin/list-student-checkin.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { ListSubjectComponent } from './components/list-subject/list-subject.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ListTeacherComponent } from './components/list-teacher/list-teacher.component';
import { ListTeamComponent } from './components/list-team/list-team.component';
import { ListTechnologyComponent } from './components/list-technology/list-technology.component';
import { ListTrainingComponent } from './components/list-training/list-training.component';
import { ListTypeNoticeComponent } from './components/list-type-notice/list-type-notice.component';
import { ListTypeReportComponent } from './components/list-type-report/list-type-report.component';
import { ListTypeTaskComponent } from './components/list-type-task/list-type-task.component';
import { ListTypeTechnologyComponent } from './components/list-type-technology/list-type-technology.component';
import { ListTypeUserComponent } from './components/list-type-user/list-type-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { CheckComponent } from './components/pages/check/check.component';
import { ClassroomComponent } from './components/pages/classroom/classroom.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ReportComponent } from './components/pages/report/report.component';
import { SocioeconomicComponent } from './components/pages/socioeconomic/socioeconomic.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { UserComponent } from './components/pages/user/user.component';
import { ErroInterceptor } from './interceptors/erro.interceptor';
import { RequisicaoInterceptor } from './interceptors/request.interceptor';
import { FormReportComponent } from './components/form-report/form-report.component';
import { jsPDF } from 'jspdf';
import { Moment } from 'moment';
import { ListNoticeComponent } from './components/list-notice/list-notice.component';
import { ListStatusEquipmentComponent } from './components/list-status-equipment/list-status-equipment.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { FormJustificationComponent } from './components/form-justification/form-justification.component';
import { FormSprintComponent } from './components/form-sprint/form-sprint.component';
import { FormSingleAnswerComponent } from './components/form-single-answer/form-single-answer.component';
import { FormTaskSprintComponent } from './components/form-task-sprint/form-task-sprint.component';
import { NgxPrintModule } from 'ngx-print';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { SubjectComponent } from './components/pages/subject/subject.component';
import { ListTask_SprintComponent } from './components/list-task-sprint/list-task-sprint.component';
import { NgModule } from '@angular/core';
import { FormTechnicalSupportComponent } from './components/form-technical-support/form-technical-support.component';
import { ListTechnicalSupportComponent } from './components/list-technical-support/list-technical-support.component';
import { ListJustificationComponent } from './components/list-justification/list-justification.component';
import { ListEvaluationAnswerComponent } from './components/list-evaluation-answer/list-evaluation-answer.component';
import { ListTemplateReportComponent } from './components/list-template-report/list-template-report.component';
import { FormCheckoutComponent } from './components/form-checkout/form-checkout.component';
import { FormEquipmentLocationComponent } from './components/form-equipment-location/form-equipment-location.component';
import { FormStudentEvaluationComponent } from './components/form-student-evaluation/form-student-evaluation.component';
import { ConfigComponent } from './components/pages/config/config.component';
import { ListReportCoordComponent } from './components/list-report-coord/list-report-coord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { ListEvaluationAnswerComponent } from './components/list-evaluation-answer/list-evaluation-answer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    TrainingComponent,
    ReportComponent,
    CheckComponent,
    TeacherComponent,
    ActivityComponent,
    SocioeconomicComponent,
    FormTrainingComponent,
    FormStudentComponent,
    FormTeacherComponent,
    FooterComponent,
    HeaderComponent,
    FormEquipmentComponent,
    FormStudentComponent,
    FormClassroomComponent,
    ClassroomComponent,
    ListTrainingComponent,
    FormLaboratoryComponent,
    FormTypeUserComponent,
    ListTypeUserComponent,
    ListLaboratoryComponent,
    ListModalityComponent,
    ListTypeTechnologyComponent,
    FormModalityComponent,
    FormTypeReportComponent,
    FormTypeTaskComponent,
    ListEquipmentComponent,
    FormSituationComponent,
    ListStudentCheckinComponent,
    FormTechnicalKnowledgeComponent,
    FormSocioeconomicInformationComponent,
    FormGroupComponent,
    ListStudentComponent,
    FormStudentComponent,
    FormTaskComponent,
    ListTypeNoticeComponent,
    ListTypeReportComponent,
    ListTypeTaskComponent,
    ListSituationComponent,
    ListSubjectComponent,
    ListTeamComponent,
    ListTaskComponent,
    UserComponent,
    AlertComponent,
    ListClassroomComponent,
    ListTeacherComponent,
    FormUserComponent,
    ListUserComponent,
    FormSubjectComponent,
    FormTypeNoticeComponent,
    FormAbsenceComponent,
    FormTechnologyComponent,
    ListTechnologyComponent,
    FormTemplateReportComponent,
    FormTypeTechnologyComponent,
    FormStatusEquipmentComponent,
    FormNoticeComponent,
    FormTeamComponent,
    FormRecordClassComponent,
    FormTeamComponent,
    FormGradeMemberGroupComponent,
    FormGroupAnswerComponent,
    FormReportComponent,
    ListNoticeComponent,
    ListStatusEquipmentComponent,
    FormAdminComponent,
    FormJustificationComponent,
    FormSprintComponent,
    FormSingleAnswerComponent,
    FormTaskSprintComponent,
    ListTask_SprintComponent,
    SubjectComponent,
    MyProfileComponent,
    FormCheckinComponent,
    ListJustificationComponent,
    FormTechnicalSupportComponent,
    FormStudentEvaluationComponent,
    FormEquipmentLocationComponent,
    FormCheckinComponent,
    FormCheckoutComponent,
    ListTemplateReportComponent,
    FormEvaluationAnswerComponent,
    ListEvaluationAnswerComponent,
    ListTechnicalSupportComponent,
    ListReportComponent,
    ConfigComponent,
    ListReportCoordComponent

  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxPrintModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequisicaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
