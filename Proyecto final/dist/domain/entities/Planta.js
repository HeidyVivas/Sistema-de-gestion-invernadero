export class Planta {
    constructor(nombre, especie, edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        if (!nombre)
            throw new Error("El nombre no puede estar vacío.");
        this.nombre = nombre;
    }
    getEspecie() {
        return this.especie;
    }
    getEdad() {
        return this.edad;
    }
}
//# sourceMappingURL=Planta.js.map