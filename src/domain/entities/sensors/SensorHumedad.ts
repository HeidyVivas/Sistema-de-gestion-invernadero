import { Sensor } from "./Sensor.js";

export class SensorHumedad extends Sensor {
  constructor(id: string) {
    super(id, "Humedad");
  }

  leerDato(): number {
    return Math.random() * (100 - 20) + 20; // Humedad simulada
  }
}