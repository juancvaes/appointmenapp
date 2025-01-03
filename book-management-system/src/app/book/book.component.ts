import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newBookTitle=""
  newBookAuthor=""
  books: Book[] = []

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    if (this.newBookTitle.length && this.newBookAuthor.length){
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }
      this.books.push(newBook)
    }

    // clear html fields
    this.newBookTitle = "";
    this.newBookAuthor = "";

    // Saving books in local storage
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  deleteBook(index: number){
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
