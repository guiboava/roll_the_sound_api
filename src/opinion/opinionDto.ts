import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, isString, IsUrl, IsUUID, Max, Min } from "class-validator";
import { CityEnum } from "./city.enum";

export class OpinionDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(1)
    @Max(5)
    note: number;

    @IsOptional()
    @IsString()
    comment?: string;

    @IsBoolean()
    recommend: boolean;

    @IsEnum(CityEnum)
    city: CityEnum;

}