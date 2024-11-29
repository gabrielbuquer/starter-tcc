import { Module } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { StudentModule } from './student/student.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    username: 'postgres',
    entities: [User],
    database: 'monetix',
    synchronize: true,
    logging: true,
  }), AuthModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
