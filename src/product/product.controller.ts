import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductDto } from "./productDto";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    findAll(): Promise<ProductEntity[]> {
        return this.productService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.productService.findById(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.productService.remove(id);
    }
    @Post()
    create(@Body() dto: ProductDto){
        return this.productService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ProductDto){
        return this.productService.update(id,dto);
    }
}