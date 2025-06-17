import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
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
        await this.validateBusinessRules(dto);
        const newArtist = this.artistRepository.create(dto);
        return this.artistRepository.save(newArtist);
    }
    async update(id: string, dto: ArtistDto) {
        const artist = await this.findById(id);
        await this.validateBusinessRules(dto, id);
        Object.assign(artist, dto);
        return this.artistRepository.save(artist);
    }

    private async validateBusinessRules(artistDto: ArtistDto, idToIgnore?: string) {
    // Nome do artista não pode se repetir
    const existing = await this.artistRepository.findOne({
        where: { name: artistDto.name },
    });
    if (existing && existing.id !== idToIgnore) {
        throw new BadRequestException('Já existe um artista com esse nome');
    }

    // Banda não pode ter menos de 3 caracteres
    if (artistDto.band.trim().length < 3) {
        throw new BadRequestException('O nome da banda deve ter pelo menos 3 caracteres');
    }

    // srcClip deve obrigatoriamente começar com "https://"
    if (!artistDto.srcClip.startsWith('https://')) {
        throw new BadRequestException('O link do clip deve começar com "https://"');
    }
    }

}