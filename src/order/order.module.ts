import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity} from "./order.entity";
import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";


@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity])],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}