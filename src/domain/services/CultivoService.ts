import { Cultivo } from "../entities/Cultivo.js";
import { Planta } from "../entities/Planta.js";
import { IRepository } from "repositories/IRepository.js";

export class CultivoService {
  constructor(private cultivoRepo: IRepository<Cultivo>) {}

  crearCultivo(cultivo: Cultivo): void {
    this.cultivoRepo.create(cultivo);
  }

  listarCultivos(): Cultivo[] {
    return this.cultivoRepo.findAll();
  }

  agregarPlantaACultivo(cultivoId: number, planta: Planta): void {
    const cultivo = this.cultivoRepo.findById(cultivoId);
    if (!cultivo) throw new Error("Cultivo no encontrado");
    cultivo.agregarPlanta(planta);
  }
}