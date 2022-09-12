import { Injectable } from '@angular/core';
import { project } from '../Models/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

  project: project;

    private projects: project[] = [
        {
            guid: '0',
            status: true,
            nombre: 'Encuesta Empresarial',
            year: '2020',
            descripcion: 'Desarrollo de plantillas de encuestas con angular material',
            detalles: 'Herramienta de un modelo de encuestas a nivel empresarial desarrollado en angular 9 conjuntamente con angular material para la captura y manejo de datos.',
            img: 'assets/img/proyectos/encuesta-cap-1.png',
            capturas: ['assets/img/proyectos/encuesta-cap-1.png','assets/img/proyectos/encuesta-cap-2.png','assets/img/proyectos/encuesta-cap-3.png','assets/img/proyectos/encuesta-cap-4.png','assets/img/proyectos/encuesta-cap-5.png'],
            url: ''
        },
        {
            guid: '1',
            status: true,
            nombre: 'MHS',
            year: '2020',
            descripcion: 'Desarrollo de múltiples plantillas con Bootstrap y formularios',
            detalles: 'Creación de plantillas con detalles y recursos suministrador por el cliente hasta satisfacer sus requerimientos. Formularios validados, Google Maps y estilos adaptados usando JavaScript y Bootstrap.',
            img: 'assets/img/proyectos/MHS-cap-1.png',
            capturas: ['assets/img/proyectos/MHS-cap-1.png','assets/img/proyectos/MHS-cap-2.png','assets/img/proyectos/MHS-cap-3.png','assets/img/proyectos/MHS-cap-4.png','assets/img/proyectos/MHS-cap-5.png'],
            url: ''
        },
        {
            guid: '2',
            status: true,
            nombre: 'Abianel Pire',
            year: '2020',
            descripcion: 'Portafolio web tipo CMS y responsive',
            detalles: 'Desarrollo de portafolio personal tipo CMS con login para administrar datos (crear, eliminar y actualizar datos de la web en tiempo real), responsive en tecnología Bootstrap aplicado en Angular 9.',
            img: 'assets/img/proyectos/abianel-cap-1.png',
            capturas: ['assets/img/proyectos/abianel-cap-1.png','assets/img/proyectos/abianel-cap-2.png','assets/img/proyectos/abianel-cap-3.png','assets/img/proyectos/abianel-cap-4.png','assets/img/proyectos/abianel-cap-5.png','assets/img/proyectos/abianel-cap-6.png','assets/img/proyectos/abianel-cap-7.png','assets/img/proyectos/abianel-cap-8.png'],
            url: ''
        },
        {
            guid: '3',
            status: true,
            nombre:'Admin web en Angular',
            year: '2020',
            descripcion: 'Desarrollo de fontend con platilla Fuse Angular',
            detalles: 'Desarrollo en conjunto para un CRUD donde se administraria el mobiliario (agregar, actualizar, eliminar) en el que la parte que represento tomo el rol de developer para el fontend, dejando el entorno habilitado para que el equipo de Backend hiciera uso de la misma',
            img: 'assets/img/proyectos/lav-1.png',
            capturas: ['assets/img/proyectos/lav-1.png'],
            url: ''
        },
        {
            guid: '4',
            status: true,
            nombre: 'FlyBussines',
            year: '2021',
            descripcion: 'Web resposive de 2 idiomas, base Laravel',
            detalles: 'Frontend elaborado en Laravel, para posteriormente facilitar el entorno a desarrolles de backend. El Frontend fue hecho con Boostrap y JavaScript para validaciones y funcionalidades extra.',
            img: 'assets/img/proyectos/flybussines-1.png',
            capturas: ['assets/img/proyectos/flybussines-1.png','assets/img/proyectos/flybussines-2.png','assets/img/proyectos/flybussines-3.png','assets/img/proyectos/flybussines-4.png','assets/img/proyectos/flybussines-5.png','assets/img/proyectos/flybussines-6.png'],
            url: ''
        },
        {
            guid: '5',
            status: true,
            nombre: 'Sanipap',
            year: '2021',
            descripcion: 'Ecommerce con Prestashop',
            detalles: 'Tienda virtual desarrollada con Prestashop, adaptando las plantillas bases elegidas por el cliente para cumplir con los requierimientos establecidos en cuanto al funcionamiento y aspecto del sitio.',
            img: 'assets/img/proyectos/sanipap-1.png',
            capturas: ['assets/img/proyectos/sanipap-1.png','assets/img/proyectos/sanipap-2.png','assets/img/proyectos/sanipap-3.png'],
            url: 'https://sanipap.com/'
        },
        {
            guid: '6',
            status: true,
            nombre: 'LaSemillaEcoShop',
            year: '2022',
            descripcion: 'Ecommerce y Blog con WordPress y Woocommerce',
            detalles: 'Tienda virtual hecho desde 0 con los diseñor suminitrador por el cliente. Se realizo tanto aplicación de diseños como configuración adaptativa de todo el stock de productos.',
            img: 'assets/img/proyectos/lasemilla-1.png',
            capturas: ['assets/img/proyectos/lasemilla-1.png','assets/img/proyectos/lasemilla-2.png','assets/img/proyectos/lasemilla-3.png','assets/img/proyectos/lasemilla-4.png','assets/img/proyectos/lasemilla-5.png'],
            url: 'https://lasemillaecoshop.com/'
        },
        {
            guid: '7',
            status: true,
            nombre: 'Checkout Pillofon',
            year: '2022',
            descripcion: 'Web resposive tipo checkout desarrolada Laravel para Frontend y Backend',
            detalles: 'Web como herramienta para llevar a clientes potenciales de la empresa adquirir de forma rapida y sencilla los productos prestados, además de captar las UTMs de campañas en las redes.',
            img: 'assets/img/proyectos/pillo-1.png',
            capturas: ['assets/img/proyectos/pillo-1.png','assets/img/proyectos/pillo-2.png','assets/img/proyectos/pillo-3.png','assets/img/proyectos/pillo-4.png','assets/img/proyectos/pillo-5.png','assets/img/proyectos/pillo-6.png'],
            url: 'https://plan.pillofon.mx/plan'
        },
        {
            guid: '8',
            status: false,
            nombre: 'Hoteleria',
            year: '2022',
            descripcion: 'Frontend en Laravel y Boostrap de sitio web publicitario.',
            detalles: 'Frontend responsivo en Laravel y Boostrap 5 junto con animaciones por secciones y componentes.',
            img: 'assets/img/proyectos/balabamba-1.png',
            capturas: ['assets/img/proyectos/balabamba-1.png','assets/img/proyectos/balabamba-2.png','assets/img/proyectos/balabamba-3.png','assets/img/proyectos/balabamba-4.png','assets/img/proyectos/balabamba-5.png','assets/img/proyectos/balabamba-6.png'],
            url: 'https://balabamba-temp-views.naguarasoftware.com/'
        },
       /* {
            guid: '9',
            status: ,
            nombre: '',
            year: '',
            descripcion: '',
            detalles: '',
            img: '',
            capturas: [],
            url: ''
        },*/
       
    ];

    constructor(){
        this.project = this.projects[0];
    }
    
    getProjects(){
        return this.projects;
    }

    getProject( id: any ){

        
        return this.projects[id];

    }
}

