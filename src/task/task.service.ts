import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    private tasks: Task[] = []
    private idCounter = 1

    findAll(): Task[] {
        return this.tasks;
    }
}

