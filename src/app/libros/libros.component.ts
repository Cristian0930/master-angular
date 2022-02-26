import { Component, OnInit, OnDestroy } from "@angular/core";
import { LibrosService } from "../services/libros.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy {

    libros: string[] = [];
    private libroSubscription: Subscription;

    constructor(private librosService: LibrosService) {
        
    }

    ngOnInit() {
        this.libros = this.librosService.obtenerLibros();
        this.libroSubscription = this.librosService.libroSubject.subscribe(() => {
            this.libros = this.librosService.obtenerLibros();
        });
    }
    
    ngOnDestroy() {
        this.libroSubscription.unsubscribe();
    }

    eliminarLibro(libro: string) {
        
    }

    guardarLibro(f) {
        if (f.valid) {
            this.librosService.agregarLibro(f.value.nombreLibro);
        }
    }
}