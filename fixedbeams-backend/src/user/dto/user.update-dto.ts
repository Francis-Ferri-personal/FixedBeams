import { IsNotEmpty, IsEmail, Length, IsOptional, IsUrl } from "class-validator";

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
    name: string;

    @IsNotEmpty()
    @Length(3, 30)
    lastName: string;

    @IsOptional()
    @IsNotEmpty()
    @Length(10)
    phone: string;

    @IsOptional()
    @IsNotEmpty()
    @IsUrl()
    srcImage: string;
}