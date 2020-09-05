import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from './user.entity';
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ){}

    createOne(newUser: UserEntity){
        return this.repository.save(newUser)
    }

    findOne(id: number){
        //TODO:
        console.log("Hola");
        
    }
    
}