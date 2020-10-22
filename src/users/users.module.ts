
import { Module } from '@nestjs/common';


import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/user-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[UsersModule]
})
export class UsersModule {}