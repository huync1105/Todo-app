import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { Task } from '../tasks/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-clear-task',
  templateUrl: './clear-task.component.html',
  styleUrls: ['./clear-task.component.css']
})
export class ClearTaskComponent implements OnInit {

  @Input() tasks?: Task[];
  @Output() reload = new EventEmitter();

  clearTask(): void {
    if (this.tasks) {
      this.tasks.forEach(task=>{
        this.taskService.deleteTask(task.id).subscribe(tasks=> 
          this.tasks = []
        );
      })
    }
    this.reload.emit()
  }

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

}
