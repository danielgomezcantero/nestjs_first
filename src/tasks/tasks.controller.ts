import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { TaskInterface } from './interface/task-interface';


@Controller('tasks')
export class TasksController {

    constructor( private tasksService:TasksService ){

    }


    @Get()// se puede agregar como parametro una ruta tasks/... 
    getTasks(): TaskInterface[]{
        return this.tasksService.getTasks();
    }

    @Get(':taskid')
    getTask(@Param('taskid')id:string):TaskInterface{

        return this.tasksService.getTask(parseInt(id));

    }

    @Post()
    createTask(@Body() task: CreateTaskDto):string{

        console.log(task.title);
        return 'Creando tarea';
    }

    @Put(':id')
    updateTask(@Body() taskUpdate: CreateTaskDto, @Param('id') id ):string{
        console.log(taskUpdate);
        console.log(id);
        
        return 'Actualizando tarea';


    }

    @Delete(':id')
    deleteTask(@Param('id') id):string{
        return `Borrando tarea: ${id}`;
    }
}
