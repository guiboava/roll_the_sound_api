import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isString, IsUrl, IsUUID, Max, Min, MinLength } from "class-validator";


export class ProductDto {
    @IsUUID(4, { message: 'O ID do produto deve ser um UUID válido.' })
    @IsOptional()
    id: string;

    @IsString({ message: 'O nome do produto deve ser um texto.' })
    @MinLength(2, { message: 'O nome do produto deve conter ao menos 2 caracteres.' })
    @IsNotEmpty({ message: 'O campo "Nome" é obrigatório.' })
    name: string;

    @IsNumber({}, { message: 'O preço deve ser um número válido.' })
    price: number;

    @IsString({ message: 'O fabricante deve ser um texto.' })
    @IsNotEmpty({ message: 'O campo "Fabricante" é obrigatório.' })
    manufacturer: string;

    @IsBoolean({ message: 'O campo "Estoque" deve ser verdadeiro ou falso.' })
    stock: boolean;

    @IsOptional()
    image?: string;
}