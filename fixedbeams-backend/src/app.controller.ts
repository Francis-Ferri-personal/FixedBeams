import {Body, Controller, Get, Post, Req, Res, Session} from '@nestjs/common';
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
  @Get('login')
  login(
      @Res() response
  ){
    return response.render('login/login')
  }
  @Post('login')
  loginPost(
      @Body() parametrosConsulta,
      @Res() response,
      @Session() session
  ){
    // validar los datos
    const email = parametrosConsulta.email;
    const password = parametrosConsulta.password;
    if(email == 'test@gmail.com' && password =='1234'){
      session.email = email
      session.roles = ['Administrador']
      return response.redirect('account');

    }else {
      if(email == 'test2@gmail.com' && password =='4321'){
        session.email = email
        session.roles = ['Supervisor']
        return response.redirect('account');
      }else {
        return response.redirect('/login')
      }
    }


  }
  @Get('account')
  protegido(
      @Res() response,
      @Session() session
  ){
    const estaLogeado = session.usuario;
    if (estaLogeado){
      return response.render('login/account',{
        usuario: session.usuario,
        roles:session.roles
      })
    }else{
      return response.redirect('/login')
    }

  }
  @Get('logout')
  logout(
      @Session()session,
      @Res() response,
      @Req() request
  ){
    session.username = undefined;
    session.roles = undefined
    request.session.destroy();
    return response.redirect('login')

  }



}
