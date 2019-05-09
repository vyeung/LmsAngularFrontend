import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css', '../admin.component.css']
})
export class BooksComponent implements OnInit {

  books: any;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.adminService.getAllBooks().subscribe(res => {
      this.books = res;
    })
  }

  deleteBookHandler(id) {
    this.adminService.deleteBook(id).subscribe(res => {
      this.getAllBooks();
    });
  }
}