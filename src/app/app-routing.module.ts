import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectcongresoComponent } from './components/projects/projectcongreso/projectcongreso.component';
import { ProjectcotacytComponent } from './components/projects/projectcotacyt/projectcotacyt.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      {
        path:'aboutme', component: AboutmeComponent
      },
      {
        path: 'experience', component: ExperienceComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'skills', component: SkillsComponent
      },
      {
        path: 'project-congreso', component: ProjectcongresoComponent
      },
      {
        path: 'project-cotacyt', component: ProjectcotacytComponent
      }, 
      {
        path:'home', component:HomeComponent
      },
      {
        path:'', redirectTo: 'home', pathMatch:'full'
      }
      

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
