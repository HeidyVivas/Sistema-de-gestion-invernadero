export class SensorService {
    constructor(sensores) {
        this.sensores = sensores;
    }
    leerTodos() {
        return this.sensores.map(sensor => ({
            tipo: sensor.tipo,
            valor: sensor.leerDato()
        }));
    }
}
//# sourceMappingURL=SensorService.js.map