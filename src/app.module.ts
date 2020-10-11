import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type:'mysql',
        host:'localhost',
        port: 3306,
        username:'root',
        password:'',
        database:'test',
        entities:['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize:true, 
              
      }
    ),
    
    TasksModule,    
    ProductosModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
