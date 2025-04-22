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

  onItemDeleted(itemId: number){
    // console.log(`ItemDeleted event read from parent ${itemId}`)
    const index = this.todos.findIndex(item => item.id === itemId);
    this.todos.splice(index, 1);
  }
}
