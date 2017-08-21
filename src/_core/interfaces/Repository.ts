export interface Repository<DTO> {
    create(object: DTO): Promise<number>;
    find(): Promise<Array<DTO>>;
    findById(id: string): Promise<DTO>;
    update(object: DTO): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}