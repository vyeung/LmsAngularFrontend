import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../../services/admin.service';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css','../../admin.component.css']
})
export class AddPublisherComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  publisher = {

    publisherName: '',
    publisherAddress: '',
    publisherPhone:''

  };
  

  onKey1(event) {
    this.publisher.publisherName = event.target.value;
  }
  onKey2(event) {
    this.publisher.publisherAddress = event.target.value;
    }  
  onKey3(event) {
    this.publisher.publisherPhone = event.target.value;
    console.log(this.publisher)
}  

    addPublisher(publisher) {
      this.adminService.addPublisher(publisher).subscribe(res => { 
        this.route.navigate(['/admin/publishers']);
       });
    }
}
