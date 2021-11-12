import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../model/task';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }
}
