export interface Car{
    brandId:number,
    colorId:number,
    modelYear:string,
    dailyPrice:number,
    description:string
}
export interface CarDetail{
    modelYear:string,
    brandName:string,
    description:string,
    colorName:string,
    dailyPrice:number,
    carImage:string[],
}