import { Component } from "@angular/core";
import { LibrosService } from "../services/libros.service";

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html'
})

export class LibrosComponent {

    libros: string[] = [];

    constructor(private librosService: LibrosService) {
        this.libros = librosService.obtenerLibros();
    }

    eliminarLibro(libro: string) {
        
    }

    guardarLibro(f) {
        if (f.valid) {
            
        }
    }
}