import { Controller, Get, HttpCode, Param, InternalServerErrorException, Post, Body, BadRequestException, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateDto } from './dto/product.create.dto';
import { ValidationError, validate } from 'class-validator';
import { ProductEntity } from './product.entity';
import { CategoryEntity } from '../category/category.entity';
import { FactoryEntity } from 'src/factory/factory.entity';
import { ProductUpdateDto } from './dto/product.update.dto';


@Controller("product")
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ){}

    @Get(":id")
    @HttpCode(200)
    async findProduct(
        @Param() pathParams
    ){
        const id = Number(pathParams.id);
        try {
            const response = await this.productService.findOne(id);
            return response;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException("Server error");
        }
    }

    @Post()
    @HttpCode(201)
    async addProduct(
        @Body() bodyParams
    ){
        // Validator
        const productCreateDto = new ProductCreateDto();
        // Data
        productCreateDto.name = bodyParams.name;
        productCreateDto.summary = bodyParams.summary;
        productCreateDto.stock = bodyParams.stock;
        productCreateDto.price = bodyParams.price;
        productCreateDto.srcImage = bodyParams.srcImage;
        productCreateDto.idCategory = bodyParams.idCategory;
        productCreateDto.idFactory = bodyParams.idFactory;
        try {
            // Validation
            const errors: ValidationError[] = await validate(productCreateDto);
            if(errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Erors in fields");
            } else {
                // Create instance
                const newProduct = new ProductEntity();
                newProduct.name = productCreateDto.name;
                newProduct.summary = productCreateDto.summary;
                newProduct.price = productCreateDto.price;
                newProduct.stock = productCreateDto.stock;
                newProduct.srcImage = productCreateDto.srcImage;
                const category = new CategoryEntity();
                category.id = productCreateDto.idCategory;
                newProduct.category = category;
                const factory = new FactoryEntity();
                factory.id = productCreateDto.idFactory;
                newProduct.factory = factory;
                // Send to DB
                const response = await this.productService.createOne(newProduct);
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException("Server error")
        }
    }

    @Put(":id")
    @HttpCode(201)
    async updateProduct(
        @Param() pathParams,
        @Body() bodyParams
    ){
        // Validator
        const productUpdateDto = new ProductUpdateDto();
        // Data
        productUpdateDto.id = Number(pathParams.id);
        productUpdateDto.name = bodyParams.name;
        productUpdateDto.summary = bodyParams.summary;
        productUpdateDto.price = bodyParams.price;
        productUpdateDto.stock = bodyParams.stock;
        productUpdateDto.srcImage = bodyParams.srcImage;
        productUpdateDto.idCategory = bodyParams.idCategory;
        productUpdateDto.idFactory = bodyParams.idFactory;
        try {
            // Validation
            const errors: ValidationError[] = await validate(productUpdateDto);
            if(errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Erors in fields");
            } else {
                // Create instance
                const updatedProduct = new ProductEntity();
                updatedProduct.id = productUpdateDto.id;
                updatedProduct.name = productUpdateDto.name;
                updatedProduct.summary = productUpdateDto.summary;
                updatedProduct.price = productUpdateDto.price;
                updatedProduct.stock = productUpdateDto.stock;
                updatedProduct.srcImage = productUpdateDto.srcImage;
                const category = new CategoryEntity();
                category.id = productUpdateDto.idCategory;
                updatedProduct.category = category;
                const factory = new FactoryEntity();
                factory.id = productUpdateDto.idFactory;
                updatedProduct.factory = factory;
                // Send to DB
                const response = await this.productService.updateOne(updatedProduct);
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException("Server error")
        }
    }
}