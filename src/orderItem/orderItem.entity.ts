import { OrderEntity } from "src/order/order.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orderItems'})
export class OrderItemEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    image:string;

    @Column()
    price:number;

    @Column()
    quantity:number;

    @JoinColumn({ name: 'orderId' }) // Vai me garantir que tenha um relacionamento com os pedidos e talvez facilitar na hora da logica do front-end.
    @ManyToOne(() => OrderEntity, (order) => order.orderItems)
    order: OrderEntity;

    @Column()
    readonly orderId: string;
}