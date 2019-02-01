import { Component } from '@angular/core';

@Component({
  selector: 'ns-tasks',
  moduleId: module.id,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public tasks: Array<any> = [];
  public icons: Map<string, string> = new Map<string, string>();

  constructor() {
    this.tasks = [
      { id: 1, title: 'Lavar o carro 1', done: false },
      { id: 2, title: 'Lavar o carro 2', done: false },
      { id: 3, title: 'Lavar o carro 3', done: false },
      { id: 4, title: 'Lavar o carro 4', done: false },
      { id: 5, title: 'Lavar o carro 5', done: true },
      { id: 6, title: 'Lavar o carro 1', done: false },
      { id: 7, title: 'Lavar o carro 2', done: false },
      { id: 8, title: 'Lavar o carro 3', done: false },
      { id: 9, title: 'Lavar o carro 4', done: false },
      { id: 10, title: 'Lavar o carro 5', done: true }
    ]

    this.setIcons();
  }

  public checkboxIcon(task) {
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