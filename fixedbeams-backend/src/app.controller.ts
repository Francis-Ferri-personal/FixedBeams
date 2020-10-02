
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  Query,
  Req,
  Res,
  Session
} from '@nestjs/common';
import { AppService } from './app.service';
import {UserLoginDto} from "./user/dto/user.login-dto";
import {validate, ValidationError} from "class-validator";
import { obtenerCarritoUsuario } from './shared/shared.functions';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  inicio(
    @Res() res,
    @Req() req
  ){
    const productosCarrito = obtenerCarritoUsuario(req);
    return res.render("app/app-component", {pagina: "search", products: productosCarrito});
  }
  
  @Get('login')
  loginn(
      @Res() response
  ){
    return response.render('login/login')
  }
}