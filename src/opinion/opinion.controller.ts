import { Controller, Get } from "@nestjs/common";
import { OpinionEntity } from "./opinion.entity";
import { OpinionService } from "./opinion.service";

@Controller('opinions')
export class OpinionController {
    constructor(private opiniontService: OpinionService) {}

    @Get()
    findAll(): Promise<OpinionEntity[]> {
        return this.opiniontService.findAll();
    }
}