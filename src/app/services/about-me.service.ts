import { Injectable } from '@angular/core';
import { about } from '../Models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  about: about;

  private aboutMe: about[] = [
    {
      guid: '0',
      nombre: 'JavaScript',
      nivel: 'intermedio',
      descripcion: 'Conocimientos usados para validaciones de formularios, funciones especificas en algún area de una web, manejo de UTM y manejo del DOM de una web.',
      url: 'assets/img/about/js.jpg'
    },
    {
      guid: '1',
      nombre: 'Boostrap',
      nivel: 'intermedio',
      descripcion: 'Desarrollo de web responsive para distintas resoluciones de pantalla',
      url: 'assets/img/about/boostrap.png'
    },
    {
      guid: '2',
      nombre: 'Angular',
      nivel: 'intermedio',
      descripcion: 'Eh hecho uso de este Framework para desarrollar aplicaciones administrativas y web que no recarguen la pagina al interactuar con el DOM de la web',
      url: 'assets/img/about/angular.png'
    },
    {
      guid: '3',
      nombre: 'Laravel',
      nivel: 'intermedio',
      descripcion: 'Creación de todo un entorno Frontend para distintos sitios web, listos para ser enlazado al Backend',
      url: 'assets/img/about/laravel.jpg'
    },
    {
      guid: '4',
      nombre: 'WordPress',
      nivel: 'intermedio',
      descripcion: 'Construcción de sitios web comerciales como Ecommerce, blogs usando Elementos y diferentes plugin como Woocommerce',
      url: 'assets/img/about/wordpress.jpg'
    },
  ];

  constructor() { 
    this.about = this.aboutMe[0];
  }

  getAboutMe(){
    return this.aboutMe;
  }

  getAbout(id:any){
    return this.aboutMe[id];
  }
}
