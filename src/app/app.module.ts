import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component'
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectcotacytComponent } from './components/projects/projectcotacyt/projectcotacyt.component';
import { ProjectcongresoComponent } from './components/projects/projectcongreso/projectcongreso.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// inicio service
import { CargarScriptsService } from './cargar-scripts.service'; 
import { MessageService } from './services/message.service';
  

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProjectcotacytComponent,
    ProjectcongresoComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienceComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    CargarScriptsService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
