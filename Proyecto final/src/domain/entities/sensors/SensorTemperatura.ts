import { Sensor } from "./Sensor.js";

export class SensorTemperatura extends Sensor {
  constructor(id: string) {
    super(id, "Temperatura");
  }

  leerDato(): number {
    return Math.random() * (40 - 10) + 10; // Temperatura simulada
  }
}