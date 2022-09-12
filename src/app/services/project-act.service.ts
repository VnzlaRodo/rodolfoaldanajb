import { Injectable } from '@angular/core';
import { project } from '../Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectActService {

  project: project = {guid: '', nombre: '', year: '', descripcion: '', img: '', status: true, url: '' };

  constructor() { }
}
