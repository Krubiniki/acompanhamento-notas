import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasEntity } from 'src/models/notas/notas.entity';
import { UserEntity } from 'src/models/users/users.entity';
import { UsersService } from '../users/users.service';
import { NotasController } from './notas.controller';
import { NotasService } from './notas.service';

@Module({
  controllers: [NotasController],
  providers: [NotasService, UsersService],
  imports: [TypeOrmModule.forFeature([NotasEntity, UserEntity])]
})
export class NotasModule {}
