import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItemEntity } from "./orderItem.entity";
import { Repository } from "typeorm";
import { OrderItemDto } from "./orderItemDto";

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItemEntity)
        private readonly orderItemRepository: Repository<OrderItemEntity>, 
    ){}
    findAll(): Promise<OrderItemEntity[]>{
        return this.orderItemRepository.find();
    }
    async findById(id: string): Promise<OrderItemEntity> {
        const findOne = await this.orderItemRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new NotFoundException(`Item de pedido não encontrado para o identificador ${id}`);
        }
        return findOne;
    }
    async remove(id: string) {
        const findById = await this.findById(id);
        await this.orderItemRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto: OrderItemDto) {
        const newOrderItem = this.orderItemRepository.create(dto);
        return this.orderItemRepository.save(newOrderItem);
    }
    async update({id, ...dto}: OrderItemDto) {
        await this.findById(id);
        return this.orderItemRepository.save({id, ...dto});
    }
}