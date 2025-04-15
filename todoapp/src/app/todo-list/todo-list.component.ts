import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: ToDo[] = [];
}
