import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task';
import {ModalController} from '@ionic/angular';
import {TasksPage} from "../tasks/tasks.page";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  tasks: Task[] = [];
  filteredTask: Task[] = [];

  constructor(private taskService: TaskService,
              public modalController: ModalController) {
  }

  ngOnInit() {
    this.taskService.getAllTask().subscribe(tasks => {
      this.tasks = tasks.map(user => {
        const title = user.title.length > 30 ? user.title.substring(0, 27) + ' ...' : user.title;
        const updatedUser = {...user, displayTitle: title};
        return updatedUser;
      });
      this.filteredTask = this.tasks.slice(0, 10);
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

  async addNewTask() {
    const modal = await this.modalController.create({
      component: TasksPage,
      cssClass: 'app-tasks'
    });
    return await modal.present();
  }
}
