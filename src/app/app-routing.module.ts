import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CommunicationCompComponent } from './components/communication-comp/communication-comp.component';
import { HomeComponent } from './components/home/home.component';
import { HookParentComponent } from './components/hook-parent/hook-parent.component';
import { HostlistComponent } from './components/hostlist/hostlist.component';
import { ObervComponent } from './components/oberv/oberv.component';
import { PoneComponent } from './components/pone/pone.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectoneComponent } from './components/projectone/projectone..component';
import { SubjectObsComponent } from './components/subject-obs/subject-obs.component';
import { ViewchildcompComponent } from './components/viewchildcomp/viewchildcomp.component';
import { LoginComponent } from './components/login/login.component'
import { Pipescom } from './components/pipescom/pipescom.component';
import { TemplateForm } from './components/templateForm/templateForm.component';
import { ReactiveFromComComponent } from './reactive-from-com/reactive-from-com.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent, 
    children: [
      {path: '', redirectTo: 'projectone', pathMatch: 'full'},
      {path: 'projectone', component: ProjectoneComponent}
    ]
  },
  {path: 'comm', component: CommunicationCompComponent},
  {path: 'obs', component: ObervComponent},
  {path: 'pone', component: PoneComponent},
  {path: 'subobs', component: SubjectObsComponent},
  {path: 'hookparent', component: HookParentComponent},
  {path: 'viewchildcomp', component: ViewchildcompComponent},
  {path: 'hostlist', component: HostlistComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pipescom', component: Pipescom},
  {path: 'tempform', component: TemplateForm},
  {path: 'reactiveform', component: ReactiveFromComComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }