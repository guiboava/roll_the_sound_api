import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OpinionEntity } from "./opinion.entity";

@Injectable()
export class OpinionService {
    constructor(
        @InjectRepository(OpinionEntity)
        private readonly opinionRepository: Repository<OpinionEntity>, 
    ){}
    findAll(): Promise<OpinionEntity[]>{
        return this.opinionRepository.find();
    }
}