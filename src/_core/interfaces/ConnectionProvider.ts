import { Connection, Repository } from 'typeorm';

export interface ConnectionProvider {
    getConnection(): Promise<Connection>;
}