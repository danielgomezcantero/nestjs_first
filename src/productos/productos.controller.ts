import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';

import { CreateProductoDto } from './dto/create-producto';
import { EditProductoDto } from './dto/edit-producto';

@Controller('productos')
export class ProductosController {
     constructor( private readonly productosService: ProductosService ){}   


    @Get()
    async findAll(){
        const data = await this.productosService.findAll();
        return  {
            message:'Petición correcta',
            data
        }
    }
    
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) ids:number ){
        console.log(typeof ids);//Capturar la peticion url - parseInt para convertir string recibido en int
        return await this.productosService.getOne(ids);    
    }

    @Post()
    createOne(
        @Body() dto:CreateProductoDto,//@Body('nombre') nombre:any       
    ){
        return this.productosService.createOne(dto);
    }
    

    @Put(':id')
    editOne(
        @Param('id') id:number,
        @Body() dto: EditProductoDto,
    ){
        return this.productosService.editOne(id, dto);
    }


    @Delete(':id')
    deleteOne(@Param('id') id:number ){

        return this.productosService.deleteOne(id);
    }

}
