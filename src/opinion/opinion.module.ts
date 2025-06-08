import { TypeOrmModule } from "@nestjs/typeorm";
import { OpiniontEntity } from "./opinion.entity";
import { Module } from "@nestjs/common";
import { OpinionController } from "./opinion.controller";
import { OpinionService } from "./opinion.service";


@Module({
    imports: [TypeOrmModule.forFeature([OpiniontEntity])],
    controllers: [OpinionController],
    providers: [OpinionService],
})
export class OpinionModule {}