import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetail[];
  carImages:CarImage[];
  dataLoaded:boolean=false;
  defaultPath:string="https://localhost:44369/";
  
  constructor(private cardetailService:CardetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetails(params["id"])
    })
  }

  getCarDetails(id:number){
    this.cardetailService.getCarDetails(id).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
}
