import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsDateString, IsIn, IsNotEmpty, IsOptional, IsString, isString, IsUrl, IsUUID, Length, ValidateNested } from "class-validator";
import { OrderItemDto } from "src/orderItem/orderItemDto";

export class OrderDto {
  @IsUUID(undefined, { message: 'O ID do pedido deve ser um UUID válido.' })
  @IsOptional()
  id: string;

  @IsString({ message: 'O Nome do cliente deve ser um texto.' })
  @IsNotEmpty({ message: 'O campo "Nome" do cliente é obrigatório.' })
  clientName: string;

  @IsString({ message: 'O CPF do cliente deve ser uma string.' })
  @Length(11, 11, { message: 'O CPF do cliente deve conter exatamente 11 dígitos.' })
  clientCpf: string;

  @IsOptional()
  @IsDateString({}, { message: 'A data do pedido deve estar em formato ISO (AAAA-MM-DD).' })
  orderDate?: Date;

  @IsIn(['pago','pendente','cancelado'], {
    message: 'Status inválido. Valores permitidos: pago ,pendente, cancelado.',
  })
  status: string;

  @IsArray({ message: 'Os itens do pedido devem estar em uma lista.' })
  @ArrayMinSize(1, { message: 'O pedido deve conter pelo menos um item.' })
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItems: OrderItemDto[];
}