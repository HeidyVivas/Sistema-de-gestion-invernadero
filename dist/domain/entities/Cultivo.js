export class Cultivo {
    constructor(id, tipo, fechaInicio) {
        this.id = id;
        this.tipo = tipo;
        this.fechaInicio = fechaInicio;
        this.plantas = [];
    }
    agregarPlanta(planta) {
        this.plantas.push(planta);
    }
    obtenerPlantas() {
        return this.plantas;
    }
}
//# sourceMappingURL=Cultivo.js.map