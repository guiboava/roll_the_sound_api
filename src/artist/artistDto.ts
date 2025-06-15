import { IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID } from "class-validator";

export class ArtistDto {
    @IsUUID(4, { message: 'O ID do artista deve ser um UUID válido.' })
    @IsOptional()
    id: string;

    @IsString({message: 'O "Nome" do artista deve ser uma string.' })
    @IsNotEmpty({message: 'O "Nome" do artista não pode ser vazio.'})
    name: string;

    @IsString({message: 'O imagem do artista deve ser uma string.' })
    @IsNotEmpty({message: 'A imagem do artista não pode ser vazia.'})
    @IsUrl({}, { message: 'O link do imagem deve ser uma URL válida.' })
    image: string;

    @IsString({message: 'A banda do artista deve ser uma string.' })
    @IsNotEmpty({message: 'A banda do artista não pode ser vazio.'})
    band: string;

    @IsString({message: 'O Clip do artista deve ser uma string.' })
    @IsNotEmpty({message: 'O Clip do artista não pode ser vazio.'})
    @IsUrl({}, { message: 'O link do clip deve ser uma URL válida.' })
    srcClip: string;

    @IsOptional()
    @IsString({ message: 'O campo "Sobre" deve ser uma string.' })
    about?: string;

}