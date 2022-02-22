import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from '../tasks/task';
import { TaskService } from '../task.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() tasks: Task[] = [];

  addTask(content: string): void {
    content = content.trim();
    if (!content) {return};
    this.taskService.addTask({content} as unknown as Task).subscribe(task=> this.tasks.push(task))
  }

  recall(): void {
    this.taskService.getTasks().subscribe(tasks =>
      this.tasks = tasks
    )
  }

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

}
