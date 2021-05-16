import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  ApiUrl:string="https://localhost:44369/api/cars/getcardetails"

  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.ApiUrl);
  }
}
