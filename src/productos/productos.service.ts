import { Injectable } from '@nestjs/common';
import { ProductoInterface } from './interface/productos-interface';



@Injectable()
export class ProductosService {
    private readonly productos:ProductoInterface[]=[];

    findAll(): ProductoInterface[]{
        return this.productos;
    }

    getOne(id:number){
        return { ok :'getOne'}
     }    

    editOne(id:number){ 
        return { ok :'editOne'}
    }
    
    deleteOne(id:number){ 
        return { ok :'deleteOne'}
    }

}
