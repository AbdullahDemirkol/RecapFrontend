import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarDetail } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[];
  dataLoaded:boolean=false;
  defaultPath:string="https://localhost:44369/";

  constructor(private carService:CarService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorName"]){
        this.getCarsByColor(params["colorName"])
      }
      else if(params["brandName"]){
        this.getCarsByBrand(params["brandName"])
      }
      else{
        this.getCars();
      }
    })
  }
  
  getCars(){
    this.carService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByColor(colorName:string){
    this.carService.getCarByColor(colorName).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
      console.log(this.carDetails);
    })
  }
  getCarsByBrand(brandName:string){
    this.carService.getCarByBrand(brandName).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }


}
