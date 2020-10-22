import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
       
        // type:'mysql',
        // host:'localhost',
        // port: 3306,
        // username:'root',
        // password:'',
        // database:'test',
        // entities:['dist/**/*.entity{.ts,.js}'],
        // autoLoadEntities: true,
        // synchronize:true, 

        type:'mssql',      
        host:'localhost\\SQLEXPRESS',
        port: 1433,
        username:'sa',
        password:'123456',
        database:'TM_DB',
        entities:['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        //synchronize:true, 
        options:{
          encrypt:false,
          enableArithAbort: true
        }
     }     
    
    ), 
    
    UsersModule,   
    ProductosModule, DatabaseModule, ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}


    