export interface IRepository<T> {
  create(item: T): void;
  findAll(): T[];
  findById(id: number | string): T | undefined;
}