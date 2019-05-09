import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css', '../../admin.component.css']
})
export class AddBookComponent implements OnInit {

  bookTitle: string;
  author: string;
  publisher: string;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  updateTitleHandler(event) {
    this.bookTitle = event.target.value;
  }

  updateAuthorHandler(event) {
    this.author = event.target.value;
  }

  updatePublisherHandler(event) {
    this.publisher = event.target.value;
  }

  addBookHandler() {
    let bookBody = {
      bookTitle: this.bookTitle,
      authorName: this.author,
      publisherName: this.publisher
    };

    this.adminService.addBook(bookBody).subscribe(res => {
      //redirect when done
      this.router.navigate(["/admin/books"]);
    });
  }
}