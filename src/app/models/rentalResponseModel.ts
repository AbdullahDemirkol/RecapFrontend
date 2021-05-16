import { RentalDetail } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:RentalDetail[],
}