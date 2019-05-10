import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../../services/admin.service';
import { Router } from  '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-due-date',
  templateUrl: './edit-due-date.component.html',
  styleUrls: ['./edit-due-date.component.css','../../admin.component.css']
})
export class EditDueDateComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAndPopulateLoan()
  }

    loans : any;

    selectedbookId: '';
    selectedbranchId: '';
    selectedcardNo:'';
    selecteddateOut : '';
    selecteddueDate : '';

    bookTitle: any;
    branchName: any;
    borrowerName:any;





    getAndPopulateLoan() {


      this.selectedbookId = this.route.snapshot.params.id1;
      this.selectedbranchId = this.route.snapshot.params.id2;
      this.selectedcardNo = this.route.snapshot.params.id3;

      this.adminService.getBook(this.selectedbookId).subscribe(res => {
        console.log(res);
        this.bookTitle = res["bookTitle"];

      });

      this.adminService.getBranch(this.selectedbranchId).subscribe(res => {
        console.log(res);
        this.branchName = res["branchName"];
      });

      this.adminService.getBorrower(this.selectedcardNo).subscribe(res => {
        console.log(res);
        this.borrowerName = res["name"];
      });


      this.adminService.getAllLoans('').subscribe(res => {

        console.log(res);
        this.loans = res;
        
        for ( let loan of this.loans) {
          if ( this.selectedbookId == loan["bookId"] &&
             this.selectedbranchId == loan["branchId"] && 
             this.selectedcardNo == loan["cardNo"]) {
  
              console.log(loan);
  
              this.selecteddateOut = loan["dateOut"];
              this.selecteddueDate = loan["dueDate"];
              
          }
        }
      });

    }

    updateLoanHandler() {
      let loanBody = {
        bookId: this.selectedbookId,
        branchId: this.selectedbranchId,
        cardNo:  this.selectedcardNo,
        dateOut : this.selecteddateOut,
        dueDate : this.selecteddueDate,

      };

    this.adminService.updateBookLoanDueDate(loanBody,this.selectedbookId,this.selectedbranchId,this.selectedcardNo).subscribe(res => {
      this.router.navigate(['/admin/dueDate']);
    });
  }
}
