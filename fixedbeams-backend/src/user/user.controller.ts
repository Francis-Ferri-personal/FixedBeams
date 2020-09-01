import { Controller, Post, HttpCode, Body, BadRequestException, Res, Req, Get, Put } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create-dto';
import { UserUpdateDto } from './dto/user.update-dto';
import { UserLoginDto } from './dto/user.login-dto';
import { ValidationError, validate } from 'class-validator';


@Controller("user")
export class UserController {
    
    @Post("login")
    @HttpCode(201)
    async login(
        @Body() bodyParams,
        @Res() res
    ) {
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        // Data
        const userLoginDto = new UserLoginDto();
        userLoginDto.email = bodyParams.email;
        userLoginDto.password = bodyParams.password;
        // Validacion
        try{
            const errors: ValidationError[] = await validate(userLoginDto);
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
                    this.addCookies(res, userData)
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
    async signIn(
        @Body() bodyParams,
        @Res() res
    ){
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        // Data
        let userUpdateDto: UserUpdateDto = new UserUpdateDto();
        userUpdateDto.email = bodyParams.email;
        userUpdateDto.password = bodyParams.password;
        userUpdateDto.userName = bodyParams.userName;
        userUpdateDto.name = bodyParams.name;
        userUpdateDto.lastName = bodyParams.lastName;
        userUpdateDto.phone = bodyParams.phone;
        userUpdateDto.srcImage = bodyParams.srcImage;
        try{
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
                    this.addCookies(res, userData)
                }
                res.send(userData);            
            }
        } catch(error){
            console.log("Error: ", error);
            throw new BadRequestException("Error validating");
        }
    }

    @Put("sign-in")
    @HttpCode(201)
    async signInUpdate(
        @Body() bodyParams,
        @Res() res
    ){
        // Platform
        const platform = bodyParams.platform; // Mobile or Web
        // Data
        let userCreateDto: UserCreateDto = new UserCreateDto();
        userCreateDto.email = bodyParams.email;
        userCreateDto.password = bodyParams.password;
        userCreateDto.userName = bodyParams.userName;
        userCreateDto.name = bodyParams.name;
        userCreateDto.lastName = bodyParams.lastName;
        userCreateDto.phone = bodyParams.phone;
        userCreateDto.srcImage = bodyParams.srcImage;
        try{
            const errors: ValidationError[] = await validate(userCreateDto);
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
                    this.addCookies(res, userData)
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

    @Get("mostrarCookies")
    mostrarCookies(
        @Req() req
    ){
        const mensaje = {
            sinFirmar: req.cookies,
            firmadas: req.signedCookies
        }
        return mensaje;
    }
}

interface AccountData {
    userName: string;
    srcImage?: string;
    creado?: boolean;
    actualizado?: boolean;
}