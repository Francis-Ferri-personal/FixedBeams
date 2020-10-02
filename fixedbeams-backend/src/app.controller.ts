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
  loginn(
      @Res() response
  ){
    return response.render('login/login')
  }



}
