export abstract class Sensor {
  constructor(public id: string, public tipo: string) {}

  abstract leerDato(): number;
}