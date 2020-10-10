import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(
    //   {
    //     type:'mssql',
    //     host:'localhost',
    //     port:1433,
    //     username:'sa',
    //     password:'123456',
    //     database:'TM_DB',
    //     entities:[__dirname + '/**/*.entity{.ts,.js}'],
    //     synchronize:true,       
    //   }
    // ),
    
    TasksModule,    
    ProductosModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
