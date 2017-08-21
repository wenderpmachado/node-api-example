import { PROVIDER_TYPES } from './../../types/ProviderTypes';
import { ConnectionProvider } from './../interfaces/ConnectionProvider';
import { Connection, createConnection, ConnectionOptions, Repository as InversifyRepository } from 'typeorm';
import { NotImplementedException } from '../exceptions/NotImplementedException';
import { Repository } from '../interfaces/Repository';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class RepositoryRDBCore<DTO> implements Repository<DTO> {
    constructor(@inject(PROVIDER_TYPES.RDBProvider) private provider: ConnectionProvider) {
        this.provider = provider;
    }

    abstract getSchemaName(): string;

    async connect(schemaName: string): Promise<InversifyRepository<DTO>> {
        return (await this.provider.getConnection()).getRepository(this.getSchemaName());
    }

    async create(object: DTO): Promise<DTO> {
        return (await this.connect(this.getSchemaName())).persist(object);
    }

    async find(): Promise<Array<DTO>> {
        return (await this.connect(this.getSchemaName())).find();
    }

    async findById(id: string): Promise<DTO> {
        let valueReturned: Array<DTO> = await (await this.connect(this.getSchemaName())).findByIds(new Array(id));
        if(valueReturned.length > 0) {
            return valueReturned[0];
        } else {
            return null;
        }
    }

    async update(object: DTO): Promise<DTO> {
        return (await this.connect(this.getSchemaName())).persist(object);
    }

    async remove(object: DTO): Promise<DTO> {
        return (await this.connect(this.getSchemaName())).remove(object);
    }
}