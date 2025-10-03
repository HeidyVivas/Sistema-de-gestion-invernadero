export class Planta {
  constructor(
    private nombre: string,
    private especie: string,
    private edad: number
  ) {}

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    if (!nombre) throw new Error("El nombre no puede estar vacío.");
    this.nombre = nombre;
  }

  getEspecie(): string {
    return this.especie;
  }

  getEdad(): number {
    return this.edad;
  }
}