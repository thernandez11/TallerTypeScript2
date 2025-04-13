export class Serie {
    posicion: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    url: string;
    urlImagen: string;

    constructor(posicion: number, nombre: string, canal: string, temporadas: number, descripcion: string, url: string, urlImagen: string) {
        this.posicion = posicion;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this. url = url;
        this.urlImagen = urlImagen;
    }


}