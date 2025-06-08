import { Controller, Get } from "@nestjs/common";
import { ArtistEntity } from "./artist.entity";
import { ArtistService } from "./artist.service";

@Controller('artists')
export class ArtistController {
    constructor(private artistService: ArtistService) {}

    @Get()
    findAll(): Promise<ArtistEntity[]> {
        return this.artistService.findAll();
    }
}