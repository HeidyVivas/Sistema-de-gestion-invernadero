export class CultivoService {
    constructor(cultivoRepo) {
        this.cultivoRepo = cultivoRepo;
    }
    crearCultivo(cultivo) {
        this.cultivoRepo.create(cultivo);
    }
    listarCultivos() {
        return this.cultivoRepo.findAll();
    }
    agregarPlantaACultivo(cultivoId, planta) {
        const cultivo = this.cultivoRepo.findById(cultivoId);
        if (!cultivo)
            throw new Error("Cultivo no encontrado");
        cultivo.agregarPlanta(planta);
    }
}
//# sourceMappingURL=CultivoService.js.map