import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "./order.entity";
import { Repository } from "typeorm";
import { OrderDto } from "./orderDto";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>, 
    ){}
    findAll(): Promise<OrderEntity[]>{
        return this.orderRepository.find();
    }
    async findById(id: string): Promise<OrderEntity> {
        const findOne = await this.orderRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new NotFoundException(`Pedido não encontrado para o identificador ${id}`);
        }
        return findOne;
    }
    async remove(id: string) {
        const findById = await this.findById(id);
        await this.orderRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto: OrderDto) {
        const newOpinion = this.orderRepository.create(dto);
        return this.orderRepository.save(newOpinion);
    }
    async update({id, ...dto}: OrderDto) {
        await this.findById(id);
        return this.orderRepository.save({id, ...dto});
    }
}