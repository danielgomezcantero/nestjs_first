import { IsDecimal, IsNumber, IsString } from "class-validator";
import { Double } from "typeorm";

 export class CreateProductoDto{

    //class validator ( se agrega un metodo ValidationPipe) en el main 

    @IsString()
    nombre:String;
    
    
    @IsNumber()
    stock: Double;

    //@IsArray
    //IsString({ each:true})
    //tags : string[]
}