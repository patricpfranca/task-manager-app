import { Component } from '@angular/core';

@Component({
  selector: 'ns-tasks',
  moduleId: module.id,
  templateUrl: './tasks.component.html'
})
export class TasksComponent {
  public tasks: Array<any> = [];

  constructor() {
    this.tasks = [
      { id: 1, title: 'Lavar o carro 1', done: false },
      { id: 2, title: 'Lavar o carro 2', done: false },
      { id: 3, title: 'Lavar o carro 3', done: false },
      { id: 4, title: 'Lavar o carro 4', done: false },
      { id: 5, title: 'Lavar o carro 5', done: false }
    ]
  }
}