import { CarImage } from "./carImage";

export interface Car{
    brandId:number,
    colorId:number,
    modelYear:string,
    dailyPrice:number,
    description:string
}
export interface CarDetail{
    id:number,
    modelYear:string,
    brandName:string,
    description:string,
    colorName:string,
    dailyPrice:number,
    carImages:string[],
}