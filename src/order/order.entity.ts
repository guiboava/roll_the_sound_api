import { OrderItemEntity } from "src/orderItem/orderItem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orders'})
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    clientName:string;

    @Column()
    clientCpf:string;

    @Column()
    orderDate:Date;

    @Column()
    status:string;

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
    orderItems: OrderItemEntity[];
}