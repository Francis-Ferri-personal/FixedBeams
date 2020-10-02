import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { obtenerCarritoUsuario } from './shared/shared.functions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  inicio(
    @Res() res,
    @Req() req,
  ){
    const productosCarrito = obtenerCarritoUsuario(req);
    return res.render("app/app-component", {pagina: "search", products: productosCarrito});
  } 
  
  
    
}
