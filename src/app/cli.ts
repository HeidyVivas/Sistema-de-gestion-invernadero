import { input, select } from "@inquirer/prompts";
import { Cultivo } from "../domain/entities/Cultivo.js";
import { SensorTemperatura } from "../domain/entities/sensors/SensorTemperatura.js";
import { SensorHumedad } from "../domain/entities/sensors/SensorHumedad.js";
import { InMemoryRepository } from "../repositories/InMemoryRepository.js";
import { CultivoService } from "../domain/services/CultivoService.js";
import { SensorService } from "../domain/services/SensorService.js";
import { generarCSV } from "../domain/utils/csvReport.js";

async function main() {
  const cultivoRepo = new InMemoryRepository<Cultivo>();
  const cultivoService = new CultivoService(cultivoRepo);
  const sensores = [new SensorTemperatura("t1"), new SensorHumedad("h1")];
  const sensorService = new SensorService(sensores);

  let salir = false;
  while (!salir) {
    const opcion = await select({
      message: "Sistema de Invernadero - Seleccione una opción:",
      choices: [
        { name: "Crear cultivo", value: "crear" },
        { name: "Listar cultivos", value: "listar" },
        { name: "Leer sensores", value: "sensores" },
        { name: "Generar reporte CSV", value: "csv" },
        { name: "Salir", value: "salir" }
      ]
    });

    try {
      switch (opcion) {
        case "crear": {
          const id = parseInt(await input({ message: "ID del cultivo:" }));
          const tipo = await input({ message: "Tipo de cultivo:" });
          const cultivo = new Cultivo(id, tipo, new Date());
          cultivoService.crearCultivo(cultivo);
          console.log("Cultivo creado con éxito!");
          break;
        }
        case "listar": {
          console.log(cultivoService.listarCultivos());
          break;
        }
        case "sensores": {
          console.log(sensorService.leerTodos());
          break;
        }
        case "csv": {
          const datos = cultivoService.listarCultivos().map(c => ({
            id: c["id" as keyof Cultivo],
            tipo: c["tipo" as keyof Cultivo],
            fechaInicio: c["fechaInicio" as keyof Cultivo]
          }));
          generarCSV("reporte_cultivos.csv", datos);
          console.log("Reporte generado: " + "reporte_cultivos.csv");
          break;
        }
        case "salir": {
          salir = true;
          break;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("Error:", String(error));
      }
    } finally {
      console.log("Operación finalizada.\n");
    }
  }
}

main();