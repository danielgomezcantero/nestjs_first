import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('productos')
export class Producto{
    @PrimaryGeneratedColumn()
    id_prodcutos:number;

    @Column({ type: 'nvarchar', nullable: false })
    nombre!:string;

    @Column({type:'float', nullable:false })
    stock:Double;
}