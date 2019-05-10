import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-borrower',
  templateUrl: './edit-borrower.component.html',
  styleUrls: ['./edit-borrower.component.css', '../../admin.component.css']
})
export class EditBorrowerComponent implements OnInit {

  id;
  name;
  address;
  phone;

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private _location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBorrower();
  }

  getBorrower() {
    var id = this.route.snapshot.params.id;

    this.adminService.getBorrower(id).subscribe(res => {
      this.id = res['cardNo'];
      this.name = res['name'];
      this.address = res['address'];
      this.phone = res['phone'];
    });
  }

  submitHandler(){
    var borrower = {'cardNo': this.id,
                  'name': this.name,
                  'address': this.address,
                  'phone': this.phone};
    this.adminService.editBorrower(this.id, borrower).subscribe(
      res => {
        this._location.back();
      }
    )
  }

}
