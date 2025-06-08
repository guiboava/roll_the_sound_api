import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemEntiy } from "./orderItem.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([OrderItemEntiy])],
})
export class OrderItemModule {}