import { Sensor } from "./Sensor.js";
export class SensorHumedad extends Sensor {
    constructor(id) {
        super(id, "Humedad");
    }
    leerDato() {
        return Math.random() * (100 - 20) + 20; // Humedad simulada
    }
}
//# sourceMappingURL=SensorHumedad.js.map