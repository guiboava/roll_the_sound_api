import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
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
        await this.validateBusinessRules(dto); 
        const opinion = this.opinionRepository.create(dto);
        return this.opinionRepository.save(opinion);
    }
    async update(id: string, dto: OpinionDto) {
        const opinion = await this.findById(id);
        await this.validateBusinessRules(dto, id);
        Object.assign(opinion, dto); 
        return this.opinionRepository.save(opinion);
    }
    private async validateBusinessRules(opinionDto: OpinionDto, idToIgnore?: string) {
    // Nome da pessoa não pode se repetir na mesma cidade
    const existing = await this.opinionRepository.findOne({
        where: { name: opinionDto.name, city: opinionDto.city },
    });
    if (existing && existing.id !== idToIgnore) {
        throw new BadRequestException('Já existe uma opinião registrada com esse nome nessa cidade');
    }

    // Nota deve ser entre 1 e 5
    if (opinionDto.note < 1 || opinionDto.note > 5) {
        throw new BadRequestException('A nota deve ser entre 1 e 5');
    }

    // Se "recommend" for verdadeiro, comentário deve ter pelo menos 10 caracteres
    if (opinionDto.recommend && (!opinionDto.comment || opinionDto.comment.length < 10)) {
        throw new BadRequestException('Comentários recomendando o produto devem ter ao menos 10 caracteres');
    }
}
}