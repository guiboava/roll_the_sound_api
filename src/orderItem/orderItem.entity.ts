import { OrderEntity } from "src/order/order.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orderItems'})
export class OrderItemEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'orderitems_name', type: 'varchar', nullable: false })
    name: string;

    @Column({name: 'orderitems_image', type: 'varchar', nullable: false })
    image: string;

    @Column({name: 'orderitems_price', type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({name: 'orderitems_quantity', type: 'int', nullable: false })
    quantity: number;

    @ManyToOne(() => OrderEntity, (order) => order.orderItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'orderitems_order_id' })
    order: OrderEntity;

    @Column({ name: 'orderitems_order_id' })
    readonly orderId: string;
}