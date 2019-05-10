import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.css','../admin.component.css']
})
export class DueDateComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) {}

  loans: any;

  ngOnInit() {
    this.getAllLoans();
  }

  getAllLoans() {
    this.adminService.getAllLoansDetails('').subscribe(res => {
      this.loans = res;

  });

}

}
