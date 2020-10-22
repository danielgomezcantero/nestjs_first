import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('productos')
export class Producto{
    @PrimaryGeneratedColumn()
    id_productos:number;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    codigo_nem!:string;

    @Column({ type: 'nvarchar', length:200, nullable: false })
    nombre!:string;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    codigo_barra:string;

    @Column({type:'float', nullable:true })
    stock:Double;

    @Column({type:'float', nullable:true })
    stock_min:Double;

    @Column({type:'float', nullable:true })
    precio1:Double;

    @Column({type:'float', nullable:true })
    descuento:Double;

    @Column({ type: 'nvarchar', length:200, nullable: true })
    representa!:string;

    
    @Column({type:'float', nullable:true })
    precio2:Double;

    
    @Column({type:'float', nullable:true })
    precio3:Double;

    
    @Column({type:'datetime', nullable:true })
    vencimiento:Double;

}