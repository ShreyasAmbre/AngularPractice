import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ClassStyleBinding } from './components/classStyleBinding/classStyleBinding.component';
import { HomeComponent } from './components/home/home.component';
import { MyContainer } from './components/myContainer/myContainer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectoneComponent } from './components/projectone/projectone..component';
import { StructureDirective } from './components/StructureDirective/structureDirective.component';
import { TemplateRefVar } from './components/templateRefVar/templateRefVar.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { TwoWayDataBind } from './components/twoWayDataBind/twoWayDataBind.component';
import { NgcontentLaptopComponent } from './components/ngcontent-laptop/ngcontent-laptop.component';
import { NgcontentMobileComponent } from './components/ngcontent-mobile/ngcontent-mobile.component';
import { NgcontentTVComponent } from './components/ngcontent-tv/ngcontent-tv.component';
import { NgcontentCameraComponent } from './components/ngcontent-camera/ngcontent-camera.component';
import { NgcontentMycardComponent } from './components/ngcontent-mycard/ngcontent-mycard.component';
import { CommunicationCompComponent } from './components/communication-comp/communication-comp.component';
import { ParentCompComponent } from './components/parent-comp/parent-comp.component';
import { ChildCompComponent } from './components/child-comp/child-comp.component';
import { ObervComponent } from './components/oberv/oberv.component';
import { PoneComponent } from './components/pone/pone.component';
import { ConeComponent } from './components/cone/cone.component';
import { SubjectObsComponent } from './components/subject-obs/subject-obs.component';
import { SubjectFormOneComponent } from './components/subject-form-one/subject-form-one.component';
import { SubjectFormTwoComponent } from './components/subject-form-two/subject-form-two.component';
import { HookParentComponent } from './components/hook-parent/hook-parent.component';
import { HookChildComponent } from './components/hook-child/hook-child.component';
import { ViewchildcompComponent } from './components/viewchildcomp/viewchildcomp.component';
import { HostlistComponent } from './components/hostlist/hostlist.component';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { LoginComponent } from './components/login/login.component';
import { Pipescom } from './components/pipescom/pipescom.component';
import { CommaSeprateNum } from './custompipes/commasepratenum.component';
import { TemplateForm } from './components/templateForm/templateForm.component';
import { ReactiveFromComComponent } from './reactive-from-com/reactive-from-com.component';
// import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    MyContainer,
    TopNavComponent,
    ClassStyleBinding,
    TemplateRefVar,
    TwoWayDataBind,
    StructureDirective,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectoneComponent,
    NgcontentLaptopComponent,
    NgcontentMobileComponent,
    NgcontentTVComponent,
    NgcontentCameraComponent,
    NgcontentMycardComponent,
    CommunicationCompComponent,
    ParentCompComponent,
    ChildCompComponent,
    ObervComponent,
    PoneComponent,
    ConeComponent,
    SubjectObsComponent,
    SubjectFormOneComponent,
    SubjectFormTwoComponent,
    HookParentComponent,
    HookChildComponent,
    ViewchildcompComponent,
    HostlistComponent,
    ChangeBgDirective,
    LoginComponent,
    Pipescom,
    CommaSeprateNum,
    TemplateForm,
    ReactiveFromComComponent,
    // HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
