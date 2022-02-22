import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../tasks/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {


  task?: Task;

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe(task => {
      this.task= task;
    })
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(task => {
        alert(`Saved task: ${task.content}`)
      })
    }
  }

  goBack() {
    this.location.back();
  }

  constructor(
    private taskService: TaskService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

}
