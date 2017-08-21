import { UserDTO } from './UserDTO';

export class User implements UserDTO {
    id: number;
    name: string;

    constructor(id: number, name: string) {}
}