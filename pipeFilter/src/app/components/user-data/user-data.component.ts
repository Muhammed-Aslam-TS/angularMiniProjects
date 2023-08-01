import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataInterFace } from 'src/app/models/userModel';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit{
  filteringData = ''
  userData!:Observable<userDataInterFace[]>
user: any;

  constructor(private service:UserServiceService){}

  ngOnInit(){
    this.userData = this.service.userData()
  }

}
