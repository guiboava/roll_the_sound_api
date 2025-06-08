import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, isString, IsUrl, IsUUID, ValidateNested } from "class-validator";
import { OrderItemDto } from "src/orderItem/orderItemDto";

export class OrderDto {
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    clientName: string;

    @IsString()
    @IsNotEmpty()
    clientCpf: string;

    @IsOptional()
    @IsDateString()
    orderDate?: Date;

    @IsString()
    status: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDto)
    orderItems: OrderItemDto[];
}