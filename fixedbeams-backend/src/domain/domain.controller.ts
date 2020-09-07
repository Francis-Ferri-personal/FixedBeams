import { Controller, Get, Param, InternalServerErrorException, Post, HttpCode, Body, BadRequestException, Put } from '@nestjs/common';
import { DomainService } from './domain.service';
import { DomainCreateDto } from './dto/domain.create.dto';
import { ValidationError, validate } from 'class-validator';
import { DomainUpdaeDto } from './dto/domain.update.dto';

@Controller("domain")
export class DomainController {
    constructor(private readonly domainService: DomainService){}

    @Get(":id")
    @HttpCode(200)
    async findDomain(
        @Param() pathParams
    ){
        const id = Number(pathParams.id);

        try {
            const response = await this.domainService.findOne(id);
            return response;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException({message: "Server error"});
        }
    }

    @Post()
    @HttpCode(201)
    async addDomain(
        @Body() bodyParams
    ){
        // Validator
        const domainCreateDto = new DomainCreateDto();
        //Data
        domainCreateDto.name = bodyParams.name;
        domainCreateDto.description = bodyParams.description;

        try {
            // Validation
            const errors: ValidationError[] = await validate(domainCreateDto);
            if(errors.length > 0) {
                throw new BadRequestException("Error in fields");
            } else {
                const response = this.domainService.createOne(bodyParams);
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Domain not registered");
        }
    }

    @Put(":id")
    @HttpCode(201)
    async updateDomain(
        @Param() pathParams,
        @Body() bodyParams
    ){
        // Get ID
        const id = Number(pathParams.id);
        bodyParams.id = id;
        // Validator
        const domainUpdaeDto = new DomainUpdaeDto();
        // Data
        domainUpdaeDto.name = bodyParams.name;
        domainUpdaeDto.description = bodyParams.description;
        try {
            // validate
            const errors: ValidationError[] = await validate(domainUpdaeDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Errors in fields")
            } else{
                const response = await this.domainService.updateOne(bodyParams);
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Error Updating");
        }

    }
}