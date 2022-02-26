

export class LibrosService {
    private libros: string[] = ['Libro de Vaxi', 'Libro de aritmética', 'El gráfico revista'];

    obtenerLibros() {
        return [...this.libros];
    }

    agregarLibro(libroNombre: string) {
        this.libros.push(libroNombre);
    }
}
