import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css','../admin.component.css']
})
export class PublishersComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) {}

  publishers: any;


  publisher = {

    publisherName: '',
    publisherAddress: '',
    publisherPhone:''

  };

  ngOnInit() {
    this.getAllPublishers();
  }

  getAllPublishers() {
    this.adminService.getAllPublishers('').subscribe(res => {
      console.log(res);
      this.publishers = res;
    });
  }


  deletePublisher(id) {
    this.adminService.deletePublisher(id).subscribe(res => {
    this.getAllPublishers();
    });
  }

}
