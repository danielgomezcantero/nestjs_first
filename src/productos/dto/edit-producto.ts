import { PartialType } from "@nestjs/mapped-types";
import { OmitType } from "@nestjs/swagger";
import { CreateProductoDto } from './create-producto';


export class EditProductoDto extends PartialType(
    OmitType(CreateProductoDto,['stock'] as const)
){

}