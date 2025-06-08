import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CityEnum } from "./city.enum";

@Entity({name: 'opinions'})
export class OpinionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'opinions_cliente_name', nullable: false })
    name: string;

    @Column({name: 'opinions_note', type: 'int', nullable: false })
    note: number;

    @Column({name: 'opinions_comment', type: 'text', nullable: true }) 
    comment: string;

    @Column({name: 'opinions_recommend', type: 'boolean', default: false })
    recommend: boolean;

    @Column({name: 'opinions_city', type:'enum',enum:CityEnum, default: CityEnum.INDEFINIDO, nullable: false })
    city: string;
}