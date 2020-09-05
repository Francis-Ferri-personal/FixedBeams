import { IsNotEmpty, IsEmail, Length, IsOptional, IsUrl, IsNumber, IsPositive } from "class-validator";

export class UserUpdateDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(14, 30)
    password: string;

    @IsNotEmpty()
    @Length(3, 30)
    userName: string;

    @IsNotEmpty()
    @Length(3, 30)
    firstName: string;

    @IsNotEmpty()
    @Length(3, 30)
    lastName: string;

    @IsOptional()
    @Length(10)
    phone?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    money?: number;

    @IsOptional()
    @IsUrl()
    srcImage?: string;
}