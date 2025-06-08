import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ArtistEntity } from "./artist.entity";
import { Repository } from "typeorm";
import { ArtistDto } from "./artistDto";

@Injectable()
export class ArtistService {

    constructor(
        @InjectRepository(ArtistEntity)
        private readonly artistRepository: Repository<ArtistEntity>,
    ) { }
    findAll(): Promise<ArtistEntity[]> {
        return this.artistRepository.find();
    }
    async findById(id: string): Promise<ArtistEntity> {
        const findOne = await this.artistRepository.findOne({ where: { id } });
        if (findOne == null) {
            throw new NotFoundException(`Artista não encontrado para o identificador ${id}`);
        }
        return findOne;
    }
    async remove(id: string) {
        const findById = await this.findById(id);
        await this.artistRepository.remove(findById);
        return { ...findById, id };
    }
    async create(dto: ArtistDto) {
        const newArtist = this.artistRepository.create(dto);
        return this.artistRepository.save(newArtist);
    }
    async update({id, ...dto}: ArtistDto) {
        await this.findById(id);
        return this.artistRepository.save({id, ...dto});
    }
}