import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDataInterFace } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';

  constructor(private http:HttpClient) { }
  userData():Observable<userDataInterFace[]>{
    return this.http.get<userDataInterFace[]>(this.baseUrl)
  }
}
