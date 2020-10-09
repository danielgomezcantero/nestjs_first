import { Injectable } from '@nestjs/common';
import { TaskInterface } from './interface/task-interface';



@Injectable()
export class TasksService {

    
    tasks: TaskInterface[] = [
       {
           id:1,
           title:"Testing",
           decription: "Test test1",
           done:true
       },
       {
            id:2,
            title:"Testing 2",
            decription: "Test test1",
            done:true
        },
        {
            id:3,
            title:"Testing 3",
            decription: "Test test1",
            done:true
        }
    ];



    getTasks(): TaskInterface[] {
        
    return this.tasks;
    }

    getTask(id:number): TaskInterface{
        return this.tasks.find( TaskInterface => TaskInterface.id === id);

    }


}
