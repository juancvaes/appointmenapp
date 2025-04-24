import { Pipe, PipeTransform } from "@angular/core";
import { ToDo } from "./models/todo";


@Pipe({
  name: "todoCompletedCount",
  standalone: true,
  pure: false
})
export class todoCompletedCountPipe implements PipeTransform{
    transform(value: ToDo[]) {
      return value.reduce((total, current) => total + (current.completed? 1: 0),0)
    }
  }