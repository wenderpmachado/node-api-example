import { NotImplementedException } from './../_core/exceptions/NotImplementedException';
import { UserDTO } from './../models/UserDTO';
import { UserRepositoryRDB } from './../repositories/UserRepositoryRDB';
import { UserRepository } from './../repositories/UserRepository';
import { REPOSITORY_TYPES } from './../types/RepositoryTypes';
import { User } from './../models/User';
import { injectable, inject, decorate } from 'inversify';
import { ServiceCore } from "../_core/services/ServiceCore";

@injectable()
export class UserService extends ServiceCore<User, UserDTO, UserRepository> {
    @inject(REPOSITORY_TYPES.UserRepository)
    private userRepository: UserRepositoryRDB;
    
    toDTO(user: User): UserDTO {
        return {
            id: user.getId,
            name: user.getName
        };
    }
    
    toModel(userDTO: UserDTO): User {
        return new User(
            userDTO.id,
            userDTO.name
        );
    }
    
    getRepository(): UserRepository {
        return this.userRepository;
    }
}