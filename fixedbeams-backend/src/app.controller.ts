
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
  login(
      @Res() response
  ){
    return response.render('login/login')
  }
  @Post("login")
  loginPost(
      @Body() parametrosCuerpo,
      @Res() res,

  ){
    const autenticado = this.autenticarUsuario(parametrosCuerpo);
    if(autenticado){
      return res.redirect("domain/categories/1");
    } else {
      return res.render(
          "login/login",
          {error: "El usuario o la contraseña no coinciden"}
      );
    }
  }
  autenticarUsuario(parametrosCuerpo): boolean{
    const email = parametrosCuerpo.email;
    const password = parametrosCuerpo.password;
    if(email == "francis.ferri@epn.edu.ec" && password == "0123456789"){
      return true;
    }
    return false;
  }
}