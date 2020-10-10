import { Double } from "typeorm";

export interface ProductoInterface {    
    id?: Number;    
    nombre:String;
    stock:Double;   
}