import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntiy } from "./product.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([ProductEntiy])],
})
export class ProductModule {}