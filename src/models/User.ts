import { UserDTO } from './UserDTO';

export class User /*implements UserDTO*/ {
    constructor(private id: number, 
                private name: string) {}

    get getId(): number {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }
}