import { Component, OnInit } from '@angular/core';

import { Task } from './shared/model/task.model';
import { TaskService } from '../shared/task.service';

import * as dialogs from 'ui/dialogs';

@Component({
  selector: 'ns-tasks',
  moduleId: module.id,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public newTask: Task;
  public icons: Map<string, string> = new Map<string, string>();

  constructor(private taskService: TaskService) {
    this.setIcons();
  }

  ngOnInit() {
    this.taskService.getAll()
      .subscribe(
        tasks => this.tasks = tasks.sort((a, b) => b.id - a.id),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }

  createTask() {
    this.newTask.title = this.newTask.title.trim();

    if(!this.newTask.title){
      alert("A tarefa deve ter um título");
    }else{
      this.taskService.create(this.newTask)
        .subscribe(
          (task) => {
            this.tasks.unshift(task);
            this.newTask = new Task(null, '');
          },
          () => alert("Ocorreu um erro no servidor, tente mais tarde.")
        )
    }
  }

  deleteTask(task: Task) {
    dialogs.confirm(`Deseja realmente excluir a tarefa "${task.title}"`)
      .then(result => {
        if ( result ) {
          this.taskService.delete(task.id)
            .subscribe(
              () => this.tasks = this.tasks.filter(t => t !== task),
              () => alert("Ocorreu um erro no servidor, tente mais tarde.")
            )
        }
      })
  }

  taskDone(task: Task) {
    task.done = !task.done;

    this.taskService.update(task)
      .subscribe({
        error: () => {
          task.done = !task.done;
          alert("Ocorreu um erro no servidor, tente mais tarde.");
        }
      })
  }

  checkboxIcon(task) {
    if (task.done)
      return this.icons.get('checked');
    else
      return this.icons.get('unchecked');
  }

  private setIcons() {
    this.icons.set('trash', String.fromCharCode(0xf014));
    this.icons.set('add', String.fromCharCode(0xf055));
    this.icons.set('checked', String.fromCharCode(0xf14a));
    this.icons.set('unchecked', String.fromCharCode(0xf096));
  }
}