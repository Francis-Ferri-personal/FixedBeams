import { Controller, Post, HttpCode, Get, Res, Param, Headers, InternalServerErrorException, Body, BadRequestException, Put } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillCreateDto } from './dto/bill.create.dto';
import { ValidationError, validate } from 'class-validator';
import { BillUpdateDto } from './dto/bill.update.dto';
import { BillEntity } from './bill.entity';
import { UserEntity } from 'src/user/user.entity';



@Controller("bill")
export class BillController {

    constructor(
        private readonly billService: BillService
    ){}
    
    @Get(":id")
    @HttpCode(200)
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
        // Validator
        const billCreateDto = new BillCreateDto();
        // Data
        billCreateDto.paymentType = bodyParams.paymentType;
        billCreateDto.total = bodyParams.total;
        billCreateDto.dateTime = new Date();
        billCreateDto.latitude = bodyParams.latitude;
        billCreateDto.longitude = bodyParams.longitude;
        billCreateDto.user = Number(bodyParams.user)
        try {
            // Validation
            const errors: ValidationError[] = await validate(billCreateDto);
            if(errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Error in fields");
            } else {
                // Create instance
                const newBill = new BillEntity();
                newBill.paymentType = billCreateDto.paymentType;
                newBill.total = billCreateDto.total;
                newBill.dateTime = billCreateDto.dateTime;
                newBill.latitude = billCreateDto.latitude;
                newBill.longitude = billCreateDto.longitude;
                newBill.user = new UserEntity();
                newBill.user.id = billCreateDto.user;
                //Send to DB
                const response = await this.billService.createOne(newBill);
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Bill not registered");
        }
    }

    @Put(":id")
    async updateBill(
        @Param() pathParams,
        @Body() bodyParams
    ){
        // Validator
        const billUpdateDto = new BillUpdateDto();
        // Data
        billUpdateDto.id = Number(pathParams.id);
        billUpdateDto.paymentType = bodyParams.paymentType;
        billUpdateDto.latitude = bodyParams.latitude;
        billUpdateDto.longitude = bodyParams.longitude;
        try {
            const errors: ValidationError[] = await validate(billUpdateDto);
            if(errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Errors in fields");
            } else {
                // Create instance
                const updateBill = new BillEntity();
                updateBill.id = billUpdateDto.id;
                updateBill.paymentType = billUpdateDto.paymentType;
                updateBill.latitude = billUpdateDto.latitude;
                updateBill.longitude = billUpdateDto.longitude;
                // Sent to DB
                const response = await this.billService.updateOne(updateBill); 
                // Send response
                return response;
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Error updating")
        }
    }

}