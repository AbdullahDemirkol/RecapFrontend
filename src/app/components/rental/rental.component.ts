import { Component, OnInit } from '@angular/core';
import { Rental, RentalDetail } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  rental:Rental[]=[]
  rentaldetails:RentalDetail[]=[]
  dataLoaded:boolean=false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentaldetails=response.data;
      this.dataLoaded=true;
    })
  }

}
