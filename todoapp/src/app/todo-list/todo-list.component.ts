import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../models/todo';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    TodoListItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: ToDo[] = [];
}
