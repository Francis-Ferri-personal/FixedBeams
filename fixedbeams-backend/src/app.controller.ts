import {Body, Controller, Get, Post, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  inicio(
    @Res() res
  ): string {
    return res.render("app/app-component");
  }
  @Get("login")
  login(
      @Res() res
  ){
    return res.render("login/login");
  }
  @Post("login")
  loginPost(
      @Body() parametrosCuerpo,
      @Res() res,
      @Session() session
  ){
    const autenticado = this.autenticarUsuario(parametrosCuerpo);
    if(autenticado){
      session.usuario = parametrosCuerpo.usuario;
      return res.redirect("category/products");
    } else {
      return res.render(
          "login/login",
          {error: "Usuario o contraseña no coinciden"}
      );
    }

  }
  autenticarUsuario(parametrosCuerpo):boolean{
    const usuario = parametrosCuerpo.usuario;
    const password = parametrosCuerpo.password;
    if(usuario == "Adrian" && password == "1234"){
      return true;
    }
    return false;
  }



}
