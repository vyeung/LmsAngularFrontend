import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../../services/admin.service';
import { Router } from  '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css', '../../admin.component.css']
})
export class EditPublisherComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAndPopulatePublisher()
  }


  selectedpublisherId: '';
  selectedpublisherName: '';
  selectedpublisherAddress: '';
  selectedpublisherPhone:'';

  getAndPopulatePublisher() {
    this.selectedpublisherId = this.route.snapshot.params.id;
    
    this.adminService.getPublisher(this.selectedpublisherId).subscribe(res => {
      console.log(res);
      this.selectedpublisherName = res["publisherName"];
      this.selectedpublisherAddress = res["publisherAddress"];
      this.selectedpublisherPhone = res["publisherPhone"];
    });
  }


  updatePublisherHandler() {
    let publisherBody = {
      publisherName: this.selectedpublisherName,
      publisherAddress: this.selectedpublisherAddress,
      publisherPhone: this.selectedpublisherPhone
    };

  this.adminService.updatePublisher(publisherBody,this.selectedpublisherId).subscribe(res => {
    
    this.router.navigate(['/admin/publishers']);
  }); 
}

} 
