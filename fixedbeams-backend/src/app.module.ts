import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { BillModule } from './bill/bill.module';
import { BillEntity } from './bill/bill.entity';
import { DomainModule } from './domain/domain.module';
import { DomainEntity } from './domain/domain.entity';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/category.entity';
import { FactoryModule } from './factory/factory.module';
import { FactoryEntity } from './factory/factory.entity';
import { RolModule } from './rol/rol.module';
import { RolEntity } from './rol/rol.entity';
import { ProductModule } from './product/product.module';
import { ProductEntity } from './product/product.entity';
import { BillDetailModule } from './bill-detail/bill-detail.module';
import { BillDetailEntity } from './bill-detail/bill-detail.entity';


@Module({
  imports: [
    UserModule,
    BillModule,
    DomainModule,
    CategoryModule,
    FactoryModule,
    RolModule,
    ProductModule,
    BillDetailModule,
    TypeOrmModule.forRoot(
      {
        name: "default",
        type: "mysql",
        host: "localhost",
        port: 666,
        username: "admin",
        password: "12345678",
        database: "fixedbeams",
        entities: [
          UserEntity,
          BillEntity,
          DomainEntity,
          CategoryEntity,
          FactoryEntity,
          RolEntity,
          ProductEntity,
          BillDetailEntity
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
