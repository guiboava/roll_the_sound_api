import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OpinionEntity } from "./opinion.entity";
import { OpinionDto } from "./opinionDto";

@Injectable()
export class OpinionService {
    constructor(
        @InjectRepository(OpinionEntity)
        private readonly opinionRepository: Repository<OpinionEntity>, 
    ){}
    findAll(): Promise<OpinionEntity[]>{
        return this.opinionRepository.find();
    }
    async findById(id: string): Promise<OpinionEntity> {
        const findOne = await this.opinionRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new NotFoundException(`Opinião não encontrado para o identificador ${id}`);
        }
        return findOne;
    }
    async remove(id: string) {
        const findById = await this.findById(id);
        await this.opinionRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto: OpinionDto) {
        const newOpinion = this.opinionRepository.create(dto);
        return this.opinionRepository.save(newOpinion);
    }
    async update({id, ...dto}: OpinionDto) {
        await this.findById(id);
        return this.opinionRepository.save({id, ...dto});
    }
}