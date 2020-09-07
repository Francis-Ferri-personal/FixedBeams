import { Controller, Post, HttpCode, Body, BadRequestException, Res, Put, Headers, Param } from '@nestjs/common';

import { UserCreateDto } from './dto/user.create-dto';
import { UserUpdateDto } from './dto/user.update-dto';
import { UserLoginDto } from './dto/user.login-dto';
import { ValidationError, validate } from 'class-validator';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService){}
    
    @Post("login")
    @HttpCode(200)
    async login(
        @Headers() headers,
        @Body() bodyParams,
        @Res() res
    ) {
        // Validator
        const userLoginDto = new UserLoginDto();
        // Data
        userLoginDto.email = bodyParams.email;
        userLoginDto.password = bodyParams.password;
        try{
            // Validacion
            const errors: ValidationError[] = await validate(userLoginDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Wrong fields");
            } else {
                let response = await this.userService.findOne(userLoginDto.email, userLoginDto.password);
                console.log(response);
                
                if(response){
                    let userData: AccountData = this.fillUserData(response)
                    if (headers.platform === "web"){
                        res = this.addCookies(res, userData)
                    }
                    res.send(userData);      
                } else {
                    res.send({message: "User not found"})
                }    
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Validation error");
        }
    }

    @Post("sign-in")
    @HttpCode(201)
    async signIn(
        @Headers() headers,
        @Body() bodyParams,
        @Res() res
    ){
        // Validator
        let userCreateDto: UserCreateDto = new UserCreateDto();
        // Data
        userCreateDto.email = bodyParams.email;
        userCreateDto.password = bodyParams.password;
        userCreateDto.userName = bodyParams.userName;
        userCreateDto.firstName = bodyParams.firstName;
        userCreateDto.lastName = bodyParams.lastName;
        userCreateDto.money = bodyParams.money;
        userCreateDto.phone = bodyParams.phone;
        userCreateDto.srcImage = bodyParams.srcImage;
        if(!userCreateDto.money){
            userCreateDto.money = 0;
        }
        try{
            // Validation
            const errors: ValidationError[] = await validate(userCreateDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Validaion error");
            } else {
                // Create instance
                const newUser = new UserEntity();
                newUser.email = userCreateDto.email;
                newUser.password = userCreateDto.password;
                newUser.userName = userCreateDto.userName;
                newUser.firstName = userCreateDto.firstName;
                newUser.lastName = userCreateDto.lastName;
                newUser.money = userCreateDto.money;
                newUser.phone = userCreateDto.phone;
                newUser.srcImage = userCreateDto.srcImage;
                //Send to DB
                const response = await this.userService.createOne(newUser);
                // Send response
                let userData: AccountData = this.fillUserData(response);
                if (headers.platform === "web"){
                    res = this.addCookies(res, userData)
                }
                res.send(userData);         
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("User not created");
        }
    }

    @Put("sign-in/:id")
    @HttpCode(201)
    async signInUpdate(
        @Param() pathParams,
        @Headers() headers,
        @Body() bodyParams,
        @Res() res
    ){
        // Validator
        let userUpdateDto: UserUpdateDto = new UserUpdateDto();
        // Data
        userUpdateDto.id = Number(pathParams.id);
        userUpdateDto.password = bodyParams.password;
        userUpdateDto.firstName = bodyParams.firstName;
        userUpdateDto.lastName = bodyParams.lastName;
        userUpdateDto.phone = bodyParams.phone;
        userUpdateDto.money = bodyParams.money;
        userUpdateDto.srcImage = bodyParams.srcImage;
        try{
            // Validation
            const errors: ValidationError[] = await validate(userUpdateDto);
            if (errors.length > 0){
                console.log(errors);
                throw new BadRequestException("Error validating");
            } else {
                // Create instance
                const updatedUser = new UserEntity();
                updatedUser.id = userUpdateDto.id;
                updatedUser.password = userUpdateDto.password;
                updatedUser.firstName = userUpdateDto.firstName;
                updatedUser.lastName = userUpdateDto.lastName;
                updatedUser.money = userUpdateDto.money;
                updatedUser.phone = userUpdateDto.phone;
                updatedUser.srcImage = userUpdateDto.srcImage;
                //Send to DB
                await this.userService.editOne(updatedUser);
                const response = await this.userService.findOneID(updatedUser.id);
                // Send response
                let userData: AccountData = this.fillUserData(response);
                if (headers.platform === "web"){
                    res = this.addCookies(res, userData)
                }
                res.send(userData);            
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Error updating");
        }
    }

    fillUserData(response): AccountData{
        let userData: AccountData = {
            "id":  response.id,
            "userName": response.userName,
            "money": Number(response.money),
            "srcImage": response.srcImage
        }
        return userData
    }
    
    addCookies(res, userData: AccountData ){
        res.cookie("id", userData.id, {signed: true});
        res.cookie("userName", userData.userName, {signed: true})
        res.cookie("money", userData.money, {signed: true})
        if(userData.srcImage){
            res.cookie("srcImage", userData.srcImage)
        }
        return res;  
    }

}

interface AccountData {
    id: number,
    userName: string;
    srcImage?: string;
    money?: number;
    creado?: boolean;
    actualizado?: boolean;
}