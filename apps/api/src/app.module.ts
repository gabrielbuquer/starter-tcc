import { Module } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    username: 'postgres',
    entities: [],
    database: 'monetix',
    synchronize: true,
    logging: true,
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
