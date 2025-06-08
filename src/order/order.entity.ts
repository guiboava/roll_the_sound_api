import { OrderItemEntity } from "src/orderItem/orderItem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orders'})
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'orders_client_name', type: 'varchar', nullable: false })
    clientName: string;

    @Column({ name: 'orders_client_cpf', type: 'varchar', length: 11, nullable: false })
    clientCpf: string;

    @Column({ name: 'orders_date', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    orderDate: Date;

    @Column({ name: 'orders_status', type: 'varchar', nullable: false })
    status: string;

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order, { cascade: true })
    orderItems: OrderItemEntity[];
}