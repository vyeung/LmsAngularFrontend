import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css', '../admin.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(
    private adminService: AdminService,
  ) {}

  authors: any;

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.adminService.getAllAuthors().subscribe(res => {
      this.authors = res;
    });
  }

  deleteAuthor(id) {
    this.adminService.deleteAuthor(id).subscribe(res => {
      this.getAllAuthors();
    });
  }
}