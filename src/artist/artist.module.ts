import { TypeOrmModule } from "@nestjs/typeorm";
import { ArtistEntiy } from "./artist.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([ArtistEntiy])],
})
export class ArtistModule {}