import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotasEntity } from 'src/models/notas/notas.entity';
import { Repository } from 'typeorm';
import { notasInterface } from 'src/models/notas/notas.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class NotasService {
    constructor(
        @InjectRepository(NotasEntity)
        private readonly notasRepository: Repository<NotasEntity>,
        private readonly usersService: UsersService
    ){}

    async createNota(payload: notasInterface): Promise<NotasEntity> {
        let user = await this.usersService.getUserByName(payload.user_name)
        let aluno = await this.usersService.getUserById(payload.user_id)
        console.log(user)
        if(user.type == 'Professor'){
            return this.notasRepository.save({
                nota:payload.nota,
                user_id:aluno
            })
        }
        else{ throw new UnauthorizedException() }
    }

    async getNotas(payload: notasInterface): Promise<any> {
        let user = await this.usersService.getUserByName(payload.user_name)
        if(user.id == payload.user_id && user.type == 'Professor'){
            return this.notasRepository.find()
        }
        else{ throw new UnauthorizedException() }
    }

    async getNotaByUserId(payload: notasInterface): Promise<NotasEntity> {
        let user = await this.usersService.getUserByName(payload.user_name)
        if(user.id == payload.user_id && user.type == 'Aluno'){
            return this.notasRepository.findOne({where: { id: payload.nota_id }})
        }
        else{ throw new UnauthorizedException() }
    }

    async updateNota(payload: notasInterface): Promise<any> {
        let user = await this.usersService.getUserByName(payload.user_name)
        if(user.type == 'Professor'){
            return this.notasRepository.update(payload.nota_id,{
                nota:payload.nota
            })
        }
        else{ throw new UnauthorizedException() }
    }

    async deleteNota(id: string): Promise<any> {
        return this.notasRepository.delete({ id: id })
    }
}


