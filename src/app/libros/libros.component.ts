import { Component } from "@angular/core";

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html'
})

export class LibrosComponent {
    libros: string[] = ['Título de libro 1', 'Título de libro 2', 'Título de libro 3'];

    eliminarLibro(libro: string) {
        this.libros = this.libros.filter(p => p !== libro);
    }
}