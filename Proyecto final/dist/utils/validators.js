import { ValidationError } from "../domain/errors/ValidationError.js";
export function validarTexto(campo, valor) {
    if (!valor || valor.trim() === "") {
        throw new ValidationError(`El campo ${campo} no puede estar vacío`);
    }
}
//# sourceMappingURL=validators.js.map