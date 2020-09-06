import { Controller, Post, HttpCode, Get, Res, Param, Headers, InternalServerErrorException, Body, BadRequestException } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillCreateDto } from './dto/bill.create.dto';
import { ValidationError, validate } from 'class-validator';



@Controller("bill")
export class BillController {

    constructor(
        private readonly billService: BillService
    ){}
    
    @Get(":id")
    async findBill(
        @Param() pathParams
    ){
        const id = Number(pathParams.id);
        try {
            const response = await this.billService.findOne(id);
            return response;
        } catch (error){
            console.log(error);
            throw new InternalServerErrorException({message: "Server error"});
        }
    }
    

    @Post()
    @HttpCode(201)
    async addBill(
        @Body() bodyParams
    ){
        // Put the dateTime
        bodyParams.dateTime = new Date();
        // Validator
        const billCreateDto = new BillCreateDto();
        // Data
        billCreateDto.paymentType = bodyParams.paymentType;
        billCreateDto.total = bodyParams.total;
        billCreateDto.dateTime = bodyParams.dateTime;
        billCreateDto.latitude = bodyParams.latitude;
        billCreateDto.longitude = bodyParams.longitude;
        try {
            // Validation
            const errors: ValidationError[] = await validate(billCreateDto);
            if(errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Error in fields");
            } else {
                const response = await this.billService.createOne(bodyParams);
                return response;
            }
        } catch (error) {
            throw new BadRequestException("Bill not registered");
        }
      
    }

}