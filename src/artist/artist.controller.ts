import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ArtistEntity } from "./artist.entity";
import { ArtistService } from "./artist.service";
import { ArtistDto } from "./artistDto";

@Controller('artists')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Get()
    findAll(): Promise<ArtistEntity[]> {
        return this.artistService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.artistService.findById(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.artistService.remove(id);
    }
    @Post()
    create(@Body() dto: ArtistDto){
        return this.artistService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: ArtistDto){
        return this.artistService.update(id,dto);
    }
}