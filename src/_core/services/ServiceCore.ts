import { Repository } from './../interfaces/Repository';
import { Service } from './../interfaces/Service';
import { NotImplementedException } from './../exceptions/NotImplementedException';
import { injectable, inject, decorate } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class ServiceCore<M, DTO, R extends Repository<DTO>> implements Service<M, DTO> {
    abstract getRepository(): R;
    abstract toDTO(object: M): DTO;
    abstract toModel(objectDTO: DTO): M;

    toModels(DTOs: Array<DTO>): Array<M> {
        let models: Array<M>;
        DTOs.forEach(dto => {
            models.push(this.toModel(dto));
        });
        return models;
    }
    
    async create(object: M): Promise<M> {
        return this.toModel(await this.getRepository().create(this.toDTO(object)));
    }
    
    async find(): Promise<Array<M>> {
        return await this.getRepository().find().then(
            (dtos) => dtos.map((dto: DTO) => {
                return this.toModel(dto);
            }));
    }
    
    async findById(id: string): Promise<M> {
        return this.toModel(await this.getRepository().findById(id));
    }
    
    async update(object: M): Promise<M> {
        return this.toModel(await this.getRepository().update(this.toDTO(object)));
    }
    
    async remove(object: M): Promise<M> {
        return this.toModel(await this.getRepository().remove(this.toDTO(object)));
    }
}