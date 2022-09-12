import { Component, OnInit } from '@angular/core';
import { project } from '../../Models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/projects.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: project = {guid: '', nombre: '', year: '', descripcion: '', img: '', status: true, url: '' };

  constructor( private activatedRoute: ActivatedRoute,
               private _projectService: ProjectService ) { 

    this.activatedRoute.params.subscribe( params => {
      
      this.project = this._projectService.getProject( params['guid']) ;
      
    })

  }

  ngOnInit(): void {

    

  }

}
