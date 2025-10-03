import { IRepository } from "./IRepository.js";
export class InMemoryRepository<T extends { id: (number | string) }> implements IRepository<T> {
  private items: T[] = [];

  create(item: T): void {
    this.items.push(item);
  }

  findAll(): T[] {
    return this.items;
  }

  findById(id: number | string): T | undefined {
    return this.items.find(item => item.id === id);
  }
}