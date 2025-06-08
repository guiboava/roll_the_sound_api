import { Controller, Get } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    findAll(): Promise<ProductEntity[]> {
        return this.productService.findAll();
    }
}