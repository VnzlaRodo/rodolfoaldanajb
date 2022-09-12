import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'home', component: AboutComponent},
	  {path: 'proyectos', component: ProjectsComponent},
	  {path: 'contacto', component: ContactComponent},
	  {path: 'proyecto/:guid', component: ProjectComponent},
	//{path: '**', component: SobremiComponent}, //debo hacer enlace error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
