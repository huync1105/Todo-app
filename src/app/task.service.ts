import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import { Task } from './tasks/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TasksApi = 'https://621451ec89fad53b1f105e63.mockapi.io/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TasksApi).pipe(
      tap(tasks => tasks),
      catchError(error => of([]))
    )
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.TasksApi}/${id}`).pipe(
      tap(selectedTask => selectedTask),
      catchError(error => of())
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.TasksApi, task, this.httpOptions).pipe(
      tap(insertedTask => insertedTask),
      catchError(error => of())
    )
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.TasksApi}/${task.id}`, task, this.httpOptions).pipe(
      tap(selectedTaske => selectedTaske),
      catchError(error => of())
    )
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.TasksApi}/${id}`, this.httpOptions).pipe(
      tap(deletedTask => of(deletedTask)),
      catchError(error => of())
    )
  }

  deleteAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TasksApi).pipe(
      tap(tasks => tasks = []),
      catchError(error => of())
    )
  }

  constructor(
    private http: HttpClient
  ) { }
}
