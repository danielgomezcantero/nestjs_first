import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductoInterface } from './interface/productos-interface';
import { CreateProductoDto } from './dto/create-producto';
import { EditProductoDto } from './dto/edit-producto';
import { Producto } from './entities/producto-entity';




@Injectable()
export class ProductosService {
    //private readonly productos:ProductoInterface[]=[];


    constructor( 
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto> ){}


    async findAll():Promise<Producto[]> {
        console.log('findAll desde services');
        return await this.productoRepository.find();        
    }

    async getOne(id:number){
        const producto = await this.productoRepository.findOne(id);
        if(!producto) throw new NotFoundException()         
        return producto;
    }  

     
    async createOne( dto:CreateProductoDto  ){
        const producto = this.productoRepository.create( dto as any);
         return await this.productoRepository.save(producto)
    }

    async editOne(id:number, dto: EditProductoDto){
        const producto = await this.productoRepository.findOne(id);
        if(!producto) throw new NotFoundException('Producto no existe');
        
        const editedProducto = Object.assign(producto, dto);

       return await this.productoRepository.save(editedProducto);
    }    
    
    async deleteOne(id:number){ 
        return await this.productoRepository.delete(id)
    }

}
