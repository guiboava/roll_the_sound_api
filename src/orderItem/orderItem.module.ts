import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemEntity } from "./orderItem.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([OrderItemEntity])],
})
export class OrderItemModule {}