import { Controller, Get } from "@nestjs/common";
import { OrderItemEntity } from "./orderItem.entity";
import { OrderItemService } from "./orderItem.service";

@Controller('orderItems')
export class OrderItemController {
    constructor(private orderItemService: OrderItemService) {}

    @Get()
    findAll(): Promise<OrderItemEntity[]> {
        return this.orderItemService.findAll();
    }
}