import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../service/task.service';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService,
              public alertController: AlertController,
              public loadingController: LoadingController) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priorityNumber: ['', [Validators.max(10), Validators.min(1)]]
    });
  }

  ngOnInit() {
  }

  onAddTodo() {
    if (this.taskForm.valid) {
      this.presentLoading();
      this.taskService.addTask(this.taskForm.value)
        .subscribe(
          () => {
            this.loadingController.dismiss();
            this.taskForm.reset();
            this.presentAlert(true);
          },
          (error) => {
            this.loadingController.dismiss();
            this.presentAlert(false);
          }
        );
    }
  }

  async presentAlert(isSuccessful: boolean) {
    const alert = await this.alertController.create({
      header: isSuccessful ? 'yaay!' : 'ouch!',
      subHeader: '',
      message: isSuccessful ? 'Task successfully created' : 'Operation failed',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }
}
