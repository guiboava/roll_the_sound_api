import { IsNotEmpty, IsOptional, IsString, isString, IsUrl, IsUUID } from "class-validator";

export class ArtistDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsString()
    @IsNotEmpty()
    band: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    srcClip: string;

    @IsOptional()
    @IsString()
    about?: string;

}