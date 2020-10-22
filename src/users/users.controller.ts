import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Usuario } from './entities/user-entity';

@Controller('usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return { mensaje: 'Petición correcta', data  }
  }
  
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getOne(id);
  }



  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
    return await this.usersService.createOne(createUserDto);
  }

  @Delete(':id')
   async deleteOne(@Param('id') id:number ){
        return await this.usersService.deleteOne(id);
    }
  }
