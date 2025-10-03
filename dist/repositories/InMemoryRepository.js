export class InMemoryRepository {
    constructor() {
        this.items = [];
    }
    create(item) {
        this.items.push(item);
    }
    findAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
//# sourceMappingURL=InMemoryRepository.js.map