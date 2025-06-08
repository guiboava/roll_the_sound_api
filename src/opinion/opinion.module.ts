import { TypeOrmModule } from "@nestjs/typeorm";
import { OpiniontEntiy } from "./opinion.entity";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([OpiniontEntiy])],
})
export class OpinionModule {}