import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'artists'})
export class ArtistEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column()
    image:string;

    @Column()
    band:string;

    @Column()
    srcClip:string;

    @Column()
    about:string;
}