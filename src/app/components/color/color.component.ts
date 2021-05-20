import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded:boolean=false;
  currentColor:Color={colorId:0,colorName:""};
  dataCheckbox=false;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
    this.dataCheckbox=true;
  }
  getCurrentColor(color:Color){
    if(color==this.currentColor && this.dataCheckbox==true){
      return "/cars";
    }
    else{
      return "/cars/color/"+color.colorName;
    }
  }
  getCheckBox(color:Color){
    if(color==this.currentColor && this.dataCheckbox==true){
      return true;
    }
    else{
      return false;
    }
  }
}
