import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {


    @Get('test')// se puede agregar como parametro una ruta tasks/... 
    getTasks(){
        return 'Retornar tareas';
    }

    @Post()
    createTask(@Body() task: CreateTaskDto):string{

        console.log(task.title);
        return 'Creando tarea';
    }

    @Put()
    updateTask():string{
        return 'Actualizando tarea';
    }

    @Delete()
    deleteTask():string{
        return 'Borran tarea';
    }
}
