export interface Service<T> {
    create(object: T);
    find();
    findById(id: string);
    update(object: T);
    remove(id: string);
}