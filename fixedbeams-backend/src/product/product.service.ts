import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private repository: Repository<ProductEntity> 
    ){}

    createOne(newProduct: ProductEntity){
        return this.repository.save(newProduct);
    }

    findOne(id: number){
        return this.repository.findOne(id);
    }
    updateOne(updatedProduct: ProductEntity){
        return this.repository.save(updatedProduct);
    }
}