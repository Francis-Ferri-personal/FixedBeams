import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainEntity } from './domain.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([DomainEntity], "default")
    ],
    controllers: [
        DomainController
    ],
    providers: [
        DomainService
    ]
})
export class DomainModule {

}