import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks =>
      this.tasks = tasks
    )
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskService.deleteTask(task.id).subscribe()
  }

  reload() {
    window.location.reload();
  }

  constructor(
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

}
