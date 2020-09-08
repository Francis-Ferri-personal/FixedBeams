import { IsNotEmpty, Length, IsPositive, IsInt, IsUrl, Min } from 'class-validator';

export class ProductCreateDto {
    @IsNotEmpty()
    @Length(3, 45)
    name: string;

    @IsNotEmpty()
    @Length(3, 45)
    summary: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    stock: number;

    @IsNotEmpty()
    @Length(3, 150)
    @IsUrl()
    srcImage: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    idCategory: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    idFactory: number;

}