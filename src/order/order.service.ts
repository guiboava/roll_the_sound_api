import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderEntity } from "./order.entity";
import { Repository } from "typeorm";
import { OrderDto } from "./orderDto";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
    ) { }
    findAll(): Promise<OrderEntity[]> {
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
        await this.validateBusinessRules(dto); 
        const newOpinion = this.orderRepository.create(dto);
        return this.orderRepository.save(newOpinion);
    }
    async update(id: string, dto: OrderDto) {
        const order = await this.findById(id);
        await this.validateBusinessRules(dto, id);
        Object.assign(order, dto); 
        return this.orderRepository.save(order); 
    }
    private async validateBusinessRules(dto: OrderDto, idToIgnore?: string) {
        // Verifica se já existe um pedido com o mesmo CPF e data
        const existing = await this.orderRepository.findOne({
            where: {
                clientCpf: dto.clientCpf,
                orderDate: dto.orderDate,
            },
        });

        if (existing && existing.id !== idToIgnore) {
            throw new BadRequestException(
                'Já existe um pedido feito com esse CPF e data.'
            );
        }

        // Valida se a data não é futura
        if (dto.orderDate && new Date(dto.orderDate) > new Date()) {
            throw new BadRequestException('A data do pedido não pode ser no futuro.');
        }

        // Valida status permitido
        const validStatuses = ['pago', 'pendente', 'cancelado'];
        if (!validStatuses.includes(dto.status.toLowerCase())) {
            throw new BadRequestException(
                `Status inválido. Os valores permitidos são: ${validStatuses.join(', ')}.`
            );
        }

        // Valida se há ao menos 1 item
        if (!dto.orderItems || dto.orderItems.length === 0) {
            throw new BadRequestException('O pedido deve conter ao menos um item.');
        }
    }


}