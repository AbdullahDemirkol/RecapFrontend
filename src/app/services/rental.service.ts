import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  ApiUrl:string="https://localhost:44369/api/";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.ApiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }
}
