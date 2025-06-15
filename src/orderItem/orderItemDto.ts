import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Min } from "class-validator";


export class OrderItemDto {
    @IsUUID(4, { message: 'O ID do item deve ser um UUID válido.' })
    @IsOptional()
    id: string;

    @IsString({ message: 'O "Nome" do item deve ser uma string.' })
    @IsNotEmpty({ message: 'O campo "Nome" é obrigatório.' })
    name: string;

    @IsUrl({}, { message: 'A imagem deve ser uma URL válida.' })
    @IsNotEmpty({ message: 'O campo "Imagem" é obrigatório.' })
    image: string;

    @IsNumber({}, { message: 'O preço deve ser um número.' })
    @IsPositive({ message: 'O preço deve ser maior que zero.' })
    price: number;

    @IsInt({ message: 'A quantidade deve ser um número inteiro.' })
    @Min(1, { message: 'A quantidade mínima é 1.' })
    quantity: number;

    @IsUUID(4, { message: 'O campo "orderId" deve conter um UUID válido.' })
    @IsNotEmpty({ message: 'O campo "orderId" é obrigatório.' })
    orderId: string;
}