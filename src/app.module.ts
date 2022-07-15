import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasModule } from './api/notas/notas.module';
import { UsersModule } from './api/users/users.module';
import ormConfig from './config/ormConfig';


@Module({
  imports: [NotasModule, UsersModule, TypeOrmModule.forRoot(ormConfig), ConfigModule.forRoot({isGlobal:true})],
})
export class AppModule {}
