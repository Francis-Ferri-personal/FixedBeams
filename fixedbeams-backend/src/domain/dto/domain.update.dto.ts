import { IsOptional, IsNotEmpty, Length } from "class-validator";

export class DomainUpdaeDto {
    @IsOptional()
    @IsNotEmpty()
    @Length(3, 45)
    name?: string;
    
    @IsNotEmpty()
    @Length(3, 45)
    description?: string;
}