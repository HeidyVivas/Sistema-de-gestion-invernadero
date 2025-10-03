import { ValidationError } from "../domain/errors/ValidationError.js";

export function validarTexto(campo: string, valor: string): void {
  if (!valor || valor.trim() === "") {
    throw new ValidationError(`El campo ${campo} no puede estar vacío`);
  }
}