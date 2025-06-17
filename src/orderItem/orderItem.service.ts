import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItemEntity } from "./orderItem.entity";
import { Repository } from "typeorm";
import { OrderItemDto } from "./orderItemDto";

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItemEntity)
        private readonly orderItemRepository: Repository<OrderItemEntity>,
    ) { }
    findAll(): Promise<OrderItemEntity[]> {
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
        await this.validateBusinessRules(dto);
        const newOrderItem = this.orderItemRepository.create(dto);
        return this.orderItemRepository.save(newOrderItem);
    }

    async update(id: string, dto: OrderItemDto) {
    const existingItem = await this.findById(id);

    await this.validateBusinessRules({ ...existingItem, ...dto });

    const updatedItem = {
        ...existingItem,
        ...dto,
        orderId: dto.orderId ?? existingItem.orderId, // preserva se não vier novo
        id,
    };

    return this.orderItemRepository.save(updatedItem);
    }

    private async validateBusinessRules(dto: OrderItemDto, idToIgnore?: string) {
        // Produto não pode ter quantidade zero ou negativa
        if (dto.quantity <= 0) {
            throw new BadRequestException('A quantidade deve ser maior que zero.');
        }

        // Preço unitário deve ser maior que zero
        if (dto.price <= 0) {
            throw new BadRequestException('O preço unitário deve ser maior que zero.');
        }

        // Não pode haver dois itens com mesmo nome e preço no mesmo pedido.
        const existing = await this.orderItemRepository.findOne({
            where: {
                name: dto.name,
                price: dto.price,
            },
        });

        if (existing && existing.id !== idToIgnore) {
            throw new BadRequestException(
                'Já existe um item com esse nome e preço unitário.'
            );
        }
    }

}