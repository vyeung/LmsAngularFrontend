import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css', '../../admin/admin.component.css']
})
export class BorrowersComponent implements OnInit {

  borrowers: any;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllBorrowers();
  }

  getAllBorrowers() {
    this.adminService.getAllBorrowers().subscribe(res => {
      this.borrowers = res;
    })
  }

  deleteHandler(id) {
    this.adminService.deleteBorrower(id).subscribe(res => {
      this.getAllBorrowers();
    });
  }

}
