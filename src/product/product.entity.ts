import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    manufacturer:string;

    @Column()
    stock:boolean;

    @Column()
    image:string;
}