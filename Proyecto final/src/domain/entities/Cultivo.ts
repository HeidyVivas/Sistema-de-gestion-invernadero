import { Planta } from "./Planta.js";

export class Cultivo {
  private plantas: Planta[] = [];

  constructor(
  public id: number,
    public tipo: string,
    public fechaInicio: Date
  ){}
  
  agregarPlanta(planta: Planta): void {
    this.plantas.push(planta);
  }

  obtenerPlantas(): Planta[] {
    return this.plantas;
  }
}