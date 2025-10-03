import fs from "fs";

export function generarCSV(nombreArchivo: string, datos: any[]): void {
  if (datos.length === 0) return;

  const headers = Object.keys(datos[0]).join(",");
  const rows = datos.map(obj => Object.values(obj).join(",")).join("\n");
  const csv = headers + "\n" + rows;

  fs.writeFileSync(nombreArchivo, csv, "utf-8");
}