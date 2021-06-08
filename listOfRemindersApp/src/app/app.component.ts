import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Granie',
      deadline: '2020-01-04',
      done: false,
    }
  ];

  constructor() {
    this.config = {
      title: 'list of reminders',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }
}