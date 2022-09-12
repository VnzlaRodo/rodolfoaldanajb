export interface project{
    guid: string;
    status: boolean;
    nombre: string;
    year: string;
    descripcion: string;
    img: string;
    url: string;
    detalles?: string;
    capturas?: string[];
}