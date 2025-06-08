import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderEntity } from "./order.entity";
import { OrderService } from "./order.service";
import { OrderDto } from "./orderDto";

@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    findAll(): Promise<OrderEntity[]> {
        return this.orderService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.orderService.findById(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.orderService.remove(id);
    }
    @Post()
    create(@Body() dto: OrderDto){
        return this.orderService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: OrderDto){
        return this.orderService.update({...dto,id});
    }
}