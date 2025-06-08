import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemEntity } from "./orderItem.entity";
import { Module } from "@nestjs/common";
import { OrderItemController } from "./orderItem.controller";
import { OrderItemService } from "./orderItem.service";


@Module({
    imports: [TypeOrmModule.forFeature([OrderItemEntity])],
    controllers: [OrderItemController],
    providers: [OrderItemService],
})
export class OrderItemModule {}