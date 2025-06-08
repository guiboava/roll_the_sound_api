import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'artists'})
export class ArtistEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'artists_name', type: 'varchar', nullable: false })
    name: string;

    @Column({ name: 'artists_image', type: 'varchar', nullable: false })
    image: string;

    @Column({ name: 'artists_band_name', type: 'varchar', nullable: false })
    band: string;

    @Column({ name: 'artists_video_link', type: 'varchar', nullable: false })
    srcClip: string;

    @Column({ name: 'artists_about', type: 'text', nullable: true })
    about?: string;
}