import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"



@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario:number;

    @Column({ type: 'nvarchar', length: 50, nullable: false })
    usuario!:string;

    @Column({ type: 'nvarchar', length:50, nullable: false })
    pass!:string;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    nombre:string;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    apellido:string;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    telefono:string;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    obs:string;

    @Column({type: 'integer', nullable:true })
    nivel:number;

    @Column({ type: 'nvarchar', length: 50, nullable: true })
    ci:string;

    // @Column({ type: 'nvarchar', length: 50, nullable: true })
    // email:string;


    @Column({ type: 'nvarchar', length: 2, nullable: true })
    eliminado:string;
   

}