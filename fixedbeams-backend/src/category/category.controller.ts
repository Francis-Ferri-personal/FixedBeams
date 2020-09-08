import { Controller, Get, HttpCode, Param, InternalServerErrorException, Post, Body, BadRequestException, ParseIntPipe, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ValidationError, validate } from 'class-validator';
import { CategoryEntity } from './category.entity';
import { DomainEntity } from 'src/domain/domain.entity';
import { CategoryUpdateDto } from './dto/category.update.dto';


@Controller("category")
export class CategoryController {
    
    constructor(private readonly categoryService: CategoryService){}

    @Get(":id")
    @HttpCode(200)
    async findCategory(
        @Param() pathParams
    ){
        const id = Number(pathParams.id);
        try {
            const response = await this.categoryService.findOne(id);
            return response;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException({message: "SErver error"});
        }
    }

    @Post()
    @HttpCode(201)
    async addCategory(
        @Body() bodyParams
    ){
        // Validator
        const categoryCreateDto = new CategoryCreateDto();
        // Data
        categoryCreateDto.name = bodyParams.name;
        categoryCreateDto.description = bodyParams.description;
        categoryCreateDto.srcImage = bodyParams.srcImage;
        categoryCreateDto.idDomain = bodyParams.idDomain;
        try {
            const errors: ValidationError[] = await validate(categoryCreateDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Errors in fields");
            } else {
                // Create instance
                const newCategory = new CategoryEntity();
                newCategory.name = categoryCreateDto.name;
                newCategory.description = categoryCreateDto.description;
                newCategory.srcImage = categoryCreateDto.srcImage;
                newCategory.domain = new DomainEntity();
                newCategory.domain.id = categoryCreateDto.idDomain;
                // Send to DB
                const response = await this.categoryService.createOne(newCategory);
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Category not register");
        }
    }

    @Put(":id")
    async updateCategory(
        @Param() pathParams,
        @Body() bodyParams
    ){
        // Validator
        const categoryUpdateDto = new CategoryUpdateDto();
        // Data
        categoryUpdateDto.id = Number(pathParams.id);
        categoryUpdateDto.name = bodyParams.name;
        categoryUpdateDto.description = bodyParams.description;
        categoryUpdateDto.srcImage = bodyParams.srcImage;
        try {
            const errors: ValidationError[] = await validate(categoryUpdateDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Errors in fields");
            } else {
                // Create instance
                const updateCategory = new CategoryEntity();
                updateCategory.id = categoryUpdateDto.id;
                updateCategory.name = categoryUpdateDto.name;
                updateCategory.description = categoryUpdateDto.description;
                updateCategory.srcImage = categoryUpdateDto.srcImage;
                // Send to DB
                const response = await this.categoryService.updateOne(updateCategory);
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Error updating")
        }
    }

}