import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() id: number = -1;
  @Input() text: string = "";
  
  completed: boolean = false;

  handleClick() {
    this.completed = true;
    console.log(`Task ${this.id} got completed`)
  }
}
