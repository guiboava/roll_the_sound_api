import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'opinions'})
export class OpiniontEntiy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    note:number;

    @Column()
    comment:string;

    @Column()
    recommend:boolean;

    @Column()
    city:string;
}