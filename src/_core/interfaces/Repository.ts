export interface Repository<DTO> {
    create(object: DTO): Promise<DTO>;
    find(): Promise<Array<DTO>>;
    findById(id: string): Promise<DTO>;
    update(object: DTO): Promise<DTO>;
    remove(object: DTO): Promise<DTO>;
}