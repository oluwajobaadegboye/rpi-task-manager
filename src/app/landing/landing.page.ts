import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task';
import {ModalController, PopoverController} from '@ionic/angular';
import {TasksPage} from '../tasks/tasks.page';
import {ProfilePopoverComponent} from './profile-popover/profile-popover.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  tasks: Task[] = [];
  filteredTask: Task[] = [];

  constructor(private taskService: TaskService,
              public modalController: ModalController,
              public popoverController: PopoverController) {
  }

  ngOnInit() {
    this.taskService.getAllTask().subscribe(tasks => {
      this.tasks = tasks.map(task => {
        const title = task.title.length > 25 ? task.title.substring(0, 21) + ' ...' : task.title;
        const updatedUser = {...task, displayTitle: title};
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

  onTaskDetails(task: any) {
    console.log('test clicking ', task);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      cssClass: 'app-profile-popover-class',
      event: ev,
      translucent: true,
      animated: true,
      backdropDismiss: true
    });
    await popover.present();

    const {role} = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
