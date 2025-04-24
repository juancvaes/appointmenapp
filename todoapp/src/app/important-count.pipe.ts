import { Pipe, PipeTransform } from "@angular/core";
import { ToDo } from "./models/todo";


@Pipe({
  name: "todoImportantCount",
  standalone: true,
  pure: false
})
export class todoImportantCountPipe implements PipeTransform{
    transform(value: ToDo[]) {
      return value.reduce((total, current) => total + (current.important? 1: 0),0)
    }
  }