import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OpiniontEntity } from "./opinion.entity";

@Injectable()
export class OpinionService {
    constructor(
        @InjectRepository(OpiniontEntity)
        private readonly opinionRepository: Repository<OpiniontEntity>, 
    ){}
    findAll(): Promise<OpiniontEntity[]>{
        return this.opinionRepository.find();
    }
}