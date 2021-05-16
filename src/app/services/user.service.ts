import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUrl:string="https://localhost:44369/api/users/getall"

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.ApiUrl);
  }
}
