export interface Service<M, DTO> {
    create(object: M): Promise<M>;
    find(): Promise<Array<M>>;
    findById(id: string): Promise<M>;
    update(object: M): Promise<M>;
    remove(object: M): Promise<M>;
}