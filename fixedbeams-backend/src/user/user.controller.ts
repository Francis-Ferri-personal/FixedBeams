import { Controller, Post, HttpCode, Body, BadRequestException, Res, Req, Get, Put, Param } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create-dto';
import { UserUpdateDto } from './dto/user.update-dto';
import { UserLoginDto } from './dto/user.login-dto';
import { ValidationError, validate } from 'class-validator';
import { UserService } from './user.service';


@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService){}
    
    @Post("login")
    @HttpCode(201)
    async login(
        @Body() bodyParams,
        @Res() res
    ) {
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        // Validator
        const userLoginDto = new UserLoginDto();
        // Data
        userLoginDto.email = bodyParams.email;
        userLoginDto.password = bodyParams.password;
        try{
            // Validacion
            const errors: ValidationError[] = await validate(userLoginDto);
            if (errors.length > 0){
                throw new BadRequestException();
            } else {
                let response = await this.userService.findOne(bodyParams);
                console.log(response);
                let userData: AccountData = {
                    "userName": "NombreGenerico",
                    "srcImage": "URL generico"
                }
                if (platform === "Web"){
                    res = this.addCookies(res, userData)
                }
                res.send(userData);            
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Error validating");
        }
    }

    @Post("sign-in")
    @HttpCode(201)
    async signInUpdate(
        @Body() bodyParams,
        @Res() res
    ){
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        // Validator
        let userCreateDto: UserCreateDto = new UserCreateDto();
        // Data
        userCreateDto.email = bodyParams.email;
        userCreateDto.password = bodyParams.password;
        userCreateDto.userName = bodyParams.userName;
        userCreateDto.firstName = bodyParams.firstName;
        userCreateDto.lastName = bodyParams.lastName;
        userCreateDto.phone = bodyParams.phone;
        userCreateDto.money = bodyParams.money;
        userCreateDto.srcImage = bodyParams.srcImage;
        try{
            // Validation
            const errors: ValidationError[] = await validate(userCreateDto);
            if (errors.length > 0){
                throw new BadRequestException();
            } else {
                const userData = await this.userService.createOne(bodyParams);
                if (platform === "Web"){
                    res = this.addCookies(res, userData)
                }
                res.send({message: "New user created"});            
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Error validating");
        }
    }

    @Put("sign-in")
    @HttpCode(201)
    async signIn(
        @Body() bodyParams,
        @Res() res
    ){
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        bodyParams.platform = null;
        // Validator
        let userUpdateDto: UserUpdateDto = new UserUpdateDto();
        // Data
        userUpdateDto.email = bodyParams.email;
        userUpdateDto.password = bodyParams.password;
        userUpdateDto.userName = bodyParams.userName;
        userUpdateDto.firstName = bodyParams.firstName;
        userUpdateDto.lastName = bodyParams.lastName;
        userUpdateDto.phone = bodyParams.phone;
        userUpdateDto.money = bodyParams.money;
        userUpdateDto.srcImage = bodyParams.srcImage;
        try{
            // Validation
            const errors: ValidationError[] = await validate(userUpdateDto);
            if (errors.length > 0){
                throw new BadRequestException();
            } else {
                //TODO: Obtener el UserName de la base de datos
                //TODO: Si tiuene foto agregar el URL al mensaje
                let userData: AccountData = {
                    "userName": "NombreGenerico",
                    "srcImage": "URL generico"
                }
                if (platform === "Web"){
                    res = this.addCookies(res, userData)
                }
                res.send(userData);            
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Error validating");
        }
    }
    
    addCookies(res, message: AccountData ){
        res.cookie("userName", message.userName, {signed: true})
        if(message.srcImage){
            res.cookie("srcImage", message.srcImage)
        }
        return res;  
    }

}

interface AccountData {
    userName: string;
    srcImage?: string;
    creado?: boolean;
    actualizado?: boolean;
}

/* @Get("mostrarCookies")
    mostrarCookies(
        @Req() req
    ){
        const mensaje = {
            sinFirmar: req.cookies,
            firmadas: req.signedCookies
        }
        return mensaje;
    } */