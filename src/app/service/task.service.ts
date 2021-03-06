import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Task, TaskStatus} from '../model/task';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'https://us-central1-rpi-task-manager.cloudfunctions.net/task';

  constructor(private http: HttpClient) {
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  addTask(task: Task) {
    if (task) {
      task.createdAt = new Date();
      task.status = TaskStatus.PENDING.toString();
      return this.http.post(this.baseUrl, task);
    }
  }
}
