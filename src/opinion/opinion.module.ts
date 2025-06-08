import { TypeOrmModule } from "@nestjs/typeorm";
import { OpinionEntity } from "./opinion.entity";
import { Module } from "@nestjs/common";
import { OpinionController } from "./opinion.controller";
import { OpinionService } from "./opinion.service";


@Module({
    imports: [TypeOrmModule.forFeature([OpinionEntity])],
    controllers: [OpinionController],
    providers: [OpinionService],
})
export class OpinionModule {}