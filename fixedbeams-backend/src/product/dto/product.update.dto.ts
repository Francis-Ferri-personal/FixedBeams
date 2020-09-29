import { IsNotEmpty, IsInt, Min, IsOptional, Length, IsPositive, IsUrl } from "class-validator";

export class ProductUpdateDto {
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    id: number;

    @IsOptional()
    @IsNotEmpty()
    @Length(3, 45)
    name?: string;

    @IsOptional()
    @IsNotEmpty()
    @Length(3, 45)
    summary?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    stock?: number;

    @IsOptional()
    @IsNotEmpty()
    @Length(3, 150)
    @IsUrl()
    srcImage?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    idCategory?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    idFactory?: number;
}