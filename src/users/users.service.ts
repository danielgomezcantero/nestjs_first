import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';

import { Usuario } from './entities/user-entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
   @InjectRepository(Usuario)
   private readonly usuarioRepository: Repository<Usuario> ) {}

 
  async findAll(): Promise<Usuario[]> {
    return  await this.usuarioRepository.find();   
  }

  async getOne(id: number) {
     const usuario = await this.usuarioRepository.findOne(id);
     if(!usuario) throw new NotFoundException('Usuario no existe');      
     return  usuario;
  }


  async createOne( dto: CreateUserDto){
     const usuario =  this.usuarioRepository.create(dto);
     return await this.usuarioRepository.save(usuario);
  }

  async editOne (id: number, dto: CreateUserDto){

    const usuario = await this.usuarioRepository.findOne(id);
    if (!usuario) throw new NotFoundException('Usuario no existe');

    const usuarioEdited = Object.assign(usuario,dto);

    return await this.usuarioRepository.save(usuarioEdited);    

  }


  async deleteOne (id:number){
    const usuario = await this.getOne(id);
    if (!usuario) throw new NotFoundException('Usuario no existe');
    return this.usuarioRepository.delete(usuario);  
  }

  
}