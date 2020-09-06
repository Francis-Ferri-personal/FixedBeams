import { IsNotEmpty, IsIn, Min, IsDate, IsNumber } from 'class-validator';

export class BillCreateDto {
    @IsNotEmpty()
    @IsIn(["cash", "credit card", "wire transfer"])
    paymentType: string;
    
    @IsNotEmpty()
    @Min(0)
    total: number;

    @IsNotEmpty()
    @IsDate()
    dateTime: Date;

    @IsNotEmpty()
    @IsNumber()
    latitude: number;

    @IsNotEmpty()
    @IsNumber()
    longitude: number;
    
    //TODO: falta el usuario
}