import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, isString, IsUrl, IsUUID, Max, Min } from "class-validator";


export class ProductDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    manufacturer: string;

    @IsBoolean()
    @IsNotEmpty()
    stock: boolean;

    @IsOptional()
    @IsString()
    image?: string;
}