import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductController } from "./product.controller";
import { ProductService } from './product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity], "default")
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ProductService
    ],
    exports: [
        ProductService
    ]
})
export class ProductModule {
    
}