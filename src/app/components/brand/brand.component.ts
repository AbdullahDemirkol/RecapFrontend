import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  dataLoaded:boolean=false;
  currentBrand:Brand={brandId:0,brandName:""};
  dataCheckbox=false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true;
    })
  }
  
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    this.dataCheckbox=true;
  }
  getCurrentBrand(brand:Brand){
    if(brand==this.currentBrand && this.dataCheckbox==true){
      return "/cars";
    }
    else{
      return "/cars/brand/"+brand.brandName;
    }
  }
  getCheckBox(brand:Brand){
    if(brand==this.currentBrand && this.dataCheckbox==true){
      return true;
    }
    else{
      return false;
    }
  }

}
