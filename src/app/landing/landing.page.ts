import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/task.service';
import {Task} from '../model/task';
import {ModalController, PopoverController} from '@ionic/angular';
import {ProfilePopoverComponent} from './profile-popover/profile-popover.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  tasks: Task[] = [];
  filteredTask: Task[] = [];
  isTaskDetailClick = false;

  constructor(private taskService: TaskService,
              public popoverController: PopoverController,
              private router: Router) {
  }

  ngOnInit() {
    this.taskService.getAllTask().subscribe(tasks => {
      this.tasks = tasks.map(task => {
        const title = task.title.length > 25 ? task.title.substring(0, 21) + ' ...' : task.title;
        const updatedUser = {...task, displayTitle: title};
        return updatedUser;
      });
      this.filteredTask = this.tasks;
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

  addNewTask() {
    this.router.navigate(['tasks']);
  }

  onTaskDetails(task: any) {
    console.log('test clicking ', task);
    this.router.navigate(['/tasks/' + task.id], task);
  }

  async presentProfilePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      cssClass: 'app-profile-popover-class',
      event: ev,
      translucent: true,
      animated: true,
      componentProps: {
        popoverController: this.popoverController
      }
    });
    await popover.present();
  }

  onSearchTask(searchString: string) {
    this.filteredTask = searchString.trim() ?
      this.tasks.filter(task =>
        task.title.toLowerCase().indexOf(searchString.trim().toLowerCase()) > 0 ||
        task.description.toLowerCase().indexOf(searchString.trim().toLowerCase()) > 0
      ) : this.tasks;
  }
}
