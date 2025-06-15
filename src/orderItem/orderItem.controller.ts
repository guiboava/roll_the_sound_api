import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderItemEntity } from "./orderItem.entity";
import { OrderItemService } from "./orderItem.service";
import { OrderItemDto } from "./orderItemDto";

@Controller('orderItems')
export class OrderItemController {
    constructor(private orderItemService: OrderItemService) {}

    @Get()
    findAll(): Promise<OrderItemEntity[]> {
        return this.orderItemService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.orderItemService.findById(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.orderItemService.remove(id);
    }
    @Post()
    create(@Body() dto: OrderItemDto){
        return this.orderItemService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: OrderItemDto){
        return this.orderItemService.update(id,dto);
    }
}