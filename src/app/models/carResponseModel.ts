import { Car, CarDetail } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:CarDetail[]
}