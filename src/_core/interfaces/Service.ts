export interface Service<M> {
    create(object: M): Promise<number>;
    find(): Promise<Array<M>>;
    findById(id: string): Promise<M>;
    update(object: M): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}