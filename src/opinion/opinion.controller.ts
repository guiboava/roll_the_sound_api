import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OpinionEntity } from "./opinion.entity";
import { OpinionService } from "./opinion.service";
import { OpinionDto } from "./opinionDto";

@Controller('opinions')
export class OpinionController {
    constructor(private opiniontService: OpinionService) {}

    @Get()
    findAll(): Promise<OpinionEntity[]> {
        return this.opiniontService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.opiniontService.findById(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.opiniontService.remove(id);
    }
    @Post()
    create(@Body() dto: OpinionDto){
        return this.opiniontService.create(dto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() dto: OpinionDto){
        return this.opiniontService.update(id,dto);
    }
}