import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AdminService } from '../../services/admin.service';
import { EditAuthorComponent } from './EditForm/edit-author/edit-author.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css', '../admin.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
  ) {}

  authors: any;
  private allItems: any[];

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

  editAuthorClickHandler(author){
    
  }

}
