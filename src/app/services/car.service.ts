import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string="https://localhost:44369/api/"

  constructor(private httpClient:HttpClient) { }
  
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByColor(colorName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbycolorname?colorName="+colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarByBrand(brandName:string):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbybrandname?brandName="+brandName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
}
