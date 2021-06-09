import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [];

  constructor() {
    this.config = {
      title: 'list of reminders',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(name: string, deadline: string) {
    const task: Task = {
      name,
      deadline,
      done: false,
    };
    this.tasks.push(task);
  }
}