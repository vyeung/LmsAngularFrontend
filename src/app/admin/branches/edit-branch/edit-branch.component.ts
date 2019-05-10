import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../../services/admin.service';
import { Router } from  '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css' , '../../admin.component.css']
})
export class EditBranchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAndPopulateBranch();
  } 

    selectedbranchId: '';
    selectedbranchName: '';
    selectedbranchAddress: '';


  getAndPopulateBranch() {
    this.selectedbranchId = this.route.snapshot.params.id;
    
    this.adminService.getBranch(this.selectedbranchId).subscribe(res => {
      console.log(res);
      this.selectedbranchName = res["branchName"];
      this.selectedbranchAddress = res["branchAddress"];
    });
  }

  updateBranchHandler() {
    let branchBody = {
      branchName: this.selectedbranchName,
      branchAddress: this.selectedbranchAddress,
    };

      this.adminService.updateBranch(branchBody,this.selectedbranchId).subscribe(res => {
        this.router.navigate(['/admin/branches']);
      });
    }


}
