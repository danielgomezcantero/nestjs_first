import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';

import { CreateProductoDto } from './dto/create-producto';
import { EditProductoDto } from './dto/edit-producto';

@Controller('productos')
export class ProductosController {
     constructor( private readonly productosService: ProductosService ){}   


    @Get()
    findAll(){
        return this.productosService.findAll();
    }
    
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) ids:number ){
        console.log(typeof ids);//Capturar la peticion url
        return this.productosService.getOne(ids);    
    }

    @Post()
    createOne(
        @Body() dto:CreateProductoDto,//@Body('nombre') nombre:any       
    ){
        return dto;
    }
    

    @Put(':id')
    editOne(
        @Param('id') id:number,
        @Body() dto: EditProductoDto,
    ){
        return this.productosService.editOne(id);
    }


    @Delete(':id')
    deleteOne(@Param('id') id:number ){

        return this.productosService.editOne(id);
    }

}
