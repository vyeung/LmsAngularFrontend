import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.css', '../../admin.component.css']
})
export class AddBorrowerComponent implements OnInit {

  name;
  address;
  phone;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  submitHandler() {
    let borrower = {
      name: this.name,
      address: this.address,
      phone:  this.phone
    };

    this.adminService.addBorrower(borrower).subscribe(res => {
      this.router.navigate(["/admin/borrowers"]);
    });
  }

}
