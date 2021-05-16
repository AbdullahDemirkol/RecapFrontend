export interface Rental{
    id:number,
    carId:number,
    customerId:number,
    rentDate:number,
    returnDate:number
}
export interface RentalDetail{
    id:number,
    colorName:string,
    brandName:string,
    carDescription:string,
    customerFirstName:string,
    customerLastName:string,
    companyName:string,
    dailyPrice:number,
    rentDate:number,
    returnDate:number,
}