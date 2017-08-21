import { UserDTO } from './UserDTO';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User /*implements UserDTO*/ {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    constructor(id: number, 
                name: string) {}

    get getId(): number {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }
}