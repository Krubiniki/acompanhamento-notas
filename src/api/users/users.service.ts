import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/models/users/users.entity';
import { Repository } from 'typeorm';
import { userInterface } from 'src/models/users/users.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(user: userInterface): Promise<UserEntity> {
        return this.userRepository.save(user)
    }

    async getUserById(id: string): Promise<UserEntity> {
        return this.userRepository.findOne({where: { id: id }})
    }

    async getUserByName(user_name: string): Promise<UserEntity> {
        return this.userRepository.findOne({where: { nome: user_name }})
    }

    async updateUser(user: userInterface): Promise<any> {
        return this.userRepository.update(user.user_id,{
            nome:user.user_name,
            type:user.type
        })
    }

    async deleteUser(id: string): Promise<any> {
        return this.userRepository.delete({ id: id })
    }
}
