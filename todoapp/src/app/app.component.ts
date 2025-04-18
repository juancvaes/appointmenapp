import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ToDo } from './models/todo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    TodoListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  newToDoText: string = "";
  currentToDos: ToDo[] = [];

  addToDo(){
    if (this.newToDoText.length){
      this.currentToDos.push({
        id: Date.now(),
        text: this.newToDoText,
    })
    this.newToDoText = "";
  }}
}
