import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class UserLoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Length(14, 30)
    password: string;
}