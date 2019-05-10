import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
 
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css' ,'../admin.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) {}

  branches: any;
 
  branch = {

    branchName: '',
    branchAddress: ''

  };

  ngOnInit() {
    this.getAllBranches();
  }

  getAllBranches() {
    this.adminService.getAllBranches('').subscribe(res => {
      this.branches = res;
    });
  }

  deleteBranch(id) {
    this.adminService.deleteBranch(id).subscribe(res => {
      this.getAllBranches();
    });
  }

  // updateBranch(id) {
  //   this.adminService.updateBranch(id).subscribe(res => {
  //     this.branches = res;
  //   });
  // }
}
