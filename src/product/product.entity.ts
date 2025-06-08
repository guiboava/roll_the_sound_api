import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'products_name', nullable: false })
    name: string;

    @Column('decimal', {name: 'products_price', precision: 10, scale: 2, nullable: false })
    price: number; 

    @Column({name: 'products_manufacturer', nullable: false })
    manufacturer: string;

    @Column({name: 'products_stock', default: true })
    stock: boolean;

    @Column({name: 'products_image', nullable: true }) 
    image: string;
}