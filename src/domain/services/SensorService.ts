import { Sensor } from "../entities/sensors/Sensor.js";

export class SensorService {
  constructor(private sensores: Sensor[]) {}

  leerTodos(): { tipo: string; valor: number }[] {
    return this.sensores.map(sensor => ({
      tipo: sensor.tipo,
      valor: sensor.leerDato()
    }));
  }
}