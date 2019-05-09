import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from "../../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css', '../../admin.component.css']
})
export class EditBookComponent implements OnInit {

  selectedBookId: any;
  selectedTitle: string;
  selectedAuthor: string;
  selectedPublisher: string;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAndPopulateBook();
  }

  getAndPopulateBook() {
    this.selectedBookId = this.route.snapshot.params.id;
    
    this.adminService.getBook(this.selectedBookId).subscribe(res => {
      console.log(res);
      this.selectedTitle = res["bookTitle"];
      this.selectedAuthor = res["authorName"];
      this.selectedPublisher = res["publisherName"];
    });
  }

  updateBookHandler() {
    let bookBody = {
      bookTitle: this.selectedTitle,
      authorName: this.selectedAuthor,
      publisherName: this.selectedPublisher
    };
    
    this.adminService.updateBook(this.selectedBookId, bookBody).subscribe(res => {
      //redirect when done
      this.router.navigate(["/admin/books"]);
    });
  }
}