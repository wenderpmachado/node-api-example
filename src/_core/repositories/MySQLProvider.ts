import { ConnectionProvider } from './../interfaces/ConnectionProvider';
import { Connection, createConnection } from 'typeorm';
import { Provider } from "./Provider";
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class MySQLProvider extends Provider {
    static connection: Connection;
    
    // Verify how it works in inversify
    // private constructor(){}

    async getConnection(): Promise<Connection> {
        if(!MySQLProvider.connection) {
            MySQLProvider.connection = await createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "test",
                entities: [
                    __dirname + '/../../models/*.js'
                ],
                autoSchemaSync: true
            });
        }
        return MySQLProvider.connection;
    }
}