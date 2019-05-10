import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css', '../../../admin.component.css']
})
export class EditAuthorComponent implements OnInit{

  id;
  name;

  ngOnInit() {
    this.getAuthor();
  }
  
  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private _location: Location,
    private route: ActivatedRoute
  ) {}

  submitHandler(){
    var author = {'authorId': this.id, 'authorName': this.name};
    this.adminService.editAuthor(this.id, author).subscribe(
      res => {
        this._location.back();
      }
    )
  }

  getAuthor() {
    var id = this.route.snapshot.params.id;

    this.adminService.getAuthor(id).subscribe(res => {
      this.id = res['authorId'];
      this.name = res['authorName'];
      
    });
  }
}
