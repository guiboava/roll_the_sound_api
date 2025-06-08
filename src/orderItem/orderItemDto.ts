import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, isString, IsUrl, IsUUID, Max, Min } from "class-validator";


export class OrderItemDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsInt()
    @Min(1)
    quantity: number;

    @IsUUID()
    @IsNotEmpty()
    orderId: string;
}