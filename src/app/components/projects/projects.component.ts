import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/Models/project';
import { ProjectService } from 'src/app/services/projects.service';
import { ProjectActService } from '../../services/project-act.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : project[];
  nombre: string = "";

  constructor( private _projectService: ProjectService, private _projectAct: ProjectActService ) { 
    this.projects = this.orderProjects(_projectService.getProjects());
    
  }

  ngOnInit(): void {
  }

  orderProjects(projects:project[]){
    var projectsTemp: project[] = [];
    projects.forEach( (element) => {
      
      element.status ? projectsTemp.push(element): false

    });
    return projectsTemp.reverse();
  }

}
