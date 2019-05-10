import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css', '../../admin.component.css']
})
export class AddAuthorComponent implements OnInit {

  name;

  ngOnInit() {
  }

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  submitHandler() {
    let author = {
      authorName: this.name
    };

    this.adminService.addAuthor(author).subscribe(res => {
      this.router.navigate(["/admin/authors"]);
    });
  }

}
