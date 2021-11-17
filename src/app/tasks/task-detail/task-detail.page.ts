import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationStart} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  task;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => {
        const currentState = this.router.getCurrentNavigation();
        this.task = currentState.extras.state;
        console.log('task ', this.task);
      })
    );
  }

}
