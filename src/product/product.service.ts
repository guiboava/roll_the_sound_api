import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { IsNull, Repository } from "typeorm";
import { ProductDto } from "./productDto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) { }
    findAll(): Promise<ProductEntity[]> {
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
        await this.validateBusinessRules(dto); 
        const product = this.productRepository.create(dto);
        return this.productRepository.save(product);
    }
    async update(id: string, dto: ProductDto) {
        const product = await this.findById(id);
        await this.validateBusinessRules(dto, id);
        Object.assign(product, dto); 
        return this.productRepository.save(product); 
    }
    private async validateBusinessRules(productDto: ProductDto, idToIgnore?: string) {
        // Nome do produto deve ser único
        const existing = await this.productRepository.findOne({
            where: { name: productDto.name },
        });
        if (existing && existing.id !== idToIgnore) {
            throw new BadRequestException('Já existe um produto com esse nome');
        }

        // Preço deve ser maior que zero
        if (productDto.price <= 0) {
            throw new BadRequestException('O preço do produto deve ser maior que zero');
        }

        // srcClip deve obrigatoriamente começar com "https://"
        if (!productDto.image?.startsWith('https://') && productDto.image )   {
            throw new BadRequestException('O link da imagem deve começar com "https://"');
        }
    }
}
