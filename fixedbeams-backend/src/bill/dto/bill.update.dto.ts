import { IsNotEmpty, IsIn, IsOptional, IsNumber } from "class-validator";


export class BillUpdateDto{
    @IsOptional()
    @IsNotEmpty()
    @IsIn(["cash", "credit card", "wire transfer"])
    paymentType?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    latitude?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    longitude?: number;
    

}