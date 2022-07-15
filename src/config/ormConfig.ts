import { join } from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'main',
  password: 'D3a6bPL0xAfYm19K7',
  database: 'acompanhamento-notas',
  autoLoadEntities: true,
  entities: [join(__dirname, '../models/**/*.entity{.ts,.js}')],
  synchronize: true,
  dropSchema: false
}

export default ormConfig