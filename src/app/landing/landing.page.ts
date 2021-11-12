import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getAllTask().subscribe(users => {
      this.tasks = users.map(user => {
        const title = user.title.length > 30 ? user.title.substring(0, 27) + ' ...' : user.title;
        const updatedUser = {...user, displayTitle: title};
        return updatedUser;
      }).slice(0, 10);
    });
  }

  onEditTaskDetails(task: Task) {

  }

  onDeleteTask(task: Task) {
    console.log('clicking');
  }

  tapEvent(e) {
    console.log('testing ... ');
  }
}
