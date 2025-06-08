import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItemEntity } from "./orderItem.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItemEntity)
        private readonly orderRepository: Repository<OrderItemEntity>, 
    ){}
    findAll(): Promise<OrderItemEntity[]>{
        return this.orderRepository.find();
    }
}