import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../../services/admin.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css','../../admin.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  branch = {
    branchName: '',
    branchAddress: ''
  };

  onKey1(event) {
    this.branch.branchName = event.target.value;
  }
  onKey2(event) {
    this.branch.branchAddress = event.target.value;
    } 
 
    addBranch(branch) {
      this.adminService.addBranch(branch).subscribe(res => { 
        this.route.navigate(['/admin/branches']);
       });
    }



}
