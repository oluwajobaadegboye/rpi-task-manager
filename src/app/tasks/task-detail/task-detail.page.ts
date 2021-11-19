import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Task, TaskStatus} from '../../model/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  // @ts-ignore
  task: Task;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.task = this.router.getCurrentNavigation().extras.state.task;
        console.log('task received ', JSON.stringify(this.task));
      }
    });
  }

  ngOnInit() {
  }

  onTaskStatus() {
    if (this.task.status) {
      const enumValueFromStatus = this.task.status.toLowerCase() === 'pending' ? 0 :
        this.task.status.toLowerCase() === 'completed' ? 2 : 1;
      return TaskStatus[this.task.status.toUpperCase()];
    }
  }

  getDate(createdAt: Date) {
    return createdAt ? new Date(createdAt).toLocaleString() : '';
  }
}
