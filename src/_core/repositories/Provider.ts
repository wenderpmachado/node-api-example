import { ConnectionProvider } from './../interfaces/ConnectionProvider';
import { Connection, Repository } from 'typeorm';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class Provider implements ConnectionProvider {
    abstract getConnection(): Promise<Connection>;
}