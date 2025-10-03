export class Trabajador {
  constructor(
    private id: number,
    private nombre: string,
    private rol: "Supervisor" | "Jardinero" | "Investigador"
  ) {}
  getId(): number {
    return this.id;
  }

  getRol(): string {
    return this.rol;
  }

  getNombre(): string {
    return this.nombre;
  }
}