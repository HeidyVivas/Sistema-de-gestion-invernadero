import { Sensor } from "./Sensor.js";
export class SensorTemperatura extends Sensor {
    constructor(id) {
        super(id, "Temperatura");
    }
    leerDato() {
        return Math.random() * (40 - 10) + 10; // Temperatura simulada
    }
}
//# sourceMappingURL=SensorTemperatura.js.map