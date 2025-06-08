import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity} from "./order.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity])],
})
export class OrderModule {}