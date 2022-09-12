import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { project } from '../../Models/project';

@Component({
  selector: 'car-project',
  templateUrl: './car-project.component.html',
  styleUrls: ['./car-project.component.css']
})
export class CarProjectComponent  {

  @Input() project: project = {guid: '', nombre: '', year: '', descripcion: '', img: '', status: true, url: '' };
  @Output() nombre =  new EventEmitter<string>();
  constructor() { }

  enviar(nombre:string){
    this.nombre.emit(nombre);    
  }

}
