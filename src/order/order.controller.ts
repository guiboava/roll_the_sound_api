import { Controller, Get } from "@nestjs/common";
import { OrderEntity } from "./order.entity";
import { OrderService } from "./order.service";

@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    findAll(): Promise<OrderEntity[]> {
        return this.orderService.findAll();
    }
}