import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() id: number = -1;
  @Input() text: string = "";
  @Output() itemDeleted = new EventEmitter<number>();

  @Input() important: boolean = false;
  @Output() importantChange = new EventEmitter<boolean>();
  
  @Input() completed: boolean = false;
  @Output() completedChange = new EventEmitter<boolean>();
  deleted: boolean = false;

  handleClick() {
    if (this.completed === false){
      this.completed = true;
      console.log(`Task ${this.id} got completed`)
    } else {
      this.completed = false;
      console.log(`Task ${this.id} got uncompleted`)
    }
    this.completedChange.emit(this.completed)
  }

  deleteTodo(){
    this.deleted = true;
    this.itemDeleted.emit(this.id)
  }

  toggleImportant(){
    this.important = !this.important;
    this.importantChange.emit(this.important);
  }
}
