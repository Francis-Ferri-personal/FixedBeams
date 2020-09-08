import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillEntity } from './bill.entity';
import { BillService } from './bill.service';
import { BillController } from "./bill.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([BillEntity], "default")
    ],
    controllers:[
        BillController
    ],
    providers: [
        BillService
    ]
})
export class BillModule {

}