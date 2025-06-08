import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./productDto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>, 
    ){}
    findAll(): Promise<ProductEntity[]>{
        return this.productRepository.find();
    }
    async findById(id: string): Promise<ProductEntity> {
        const findOne = await this.productRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new NotFoundException(`Produto não encontrado para o identificador ${id}`);
        }
        return findOne;
    }
    async remove(id: string) {
        const findById = await this.findById(id);
        await this.productRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto: ProductDto) {
        const newOrderItem = this.productRepository.create(dto);
        return this.productRepository.save(newOrderItem);
    }
    async update({id, ...dto}: ProductDto) {
        await this.findById(id);
        return this.productRepository.save({id, ...dto});
    }
}