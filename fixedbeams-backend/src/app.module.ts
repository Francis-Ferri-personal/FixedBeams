import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';


/*
 docker run -d -p 5001:3306 --name fixed-beams -e MYSQL_ROOT_PASSWORD=12345678 -e MYSQL_DATABASE=fixed-beams -e MYSQL_USER=francis -e MYSQL_PASSWORD=12345678 --restart unless-stopped mysql:5.7 
*/

const IP = "34.71.81.146";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(
      {
        name: "default",
        type: "mysql",
        host: IP,
        port: 5001,
        username: "francis",
        password: "12345678",
        database: "fixed-beams",
        entities: [
          UserEntity
        ],
        // Borrar esto para cuando ya se ponga en produccion
        synchronize: true,
        dropSchema: false
      }
    ) 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
