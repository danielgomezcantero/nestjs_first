import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    return 'Testing';
    //return this.appService.getHello();
  }
}
//Instalaciones
// class-validator, class-transformer, npm install --save @nestjs/swagger swagger-ui-express
// orm mssqql
//type orm
