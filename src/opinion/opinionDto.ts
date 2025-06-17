import {IsBoolean,IsEnum,IsInt,IsNotEmpty,IsOptional,IsString,IsUUID,Max,Min,} from 'class-validator';
import { CityEnum } from './city.enum';

export class OpinionDto {
  @IsUUID(4, { message: 'O ID da opinião deve ser um UUID válido.' })
  @IsOptional()
  id: string;

  @IsString({ message: 'O "Nome" deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "Nome" é obrigatório.' })
  name: string;

  @IsInt({ message: 'A nota deve ser um número inteiro.' })
  note: number;

  @IsOptional()
  @IsString({ message: 'O comentário deve ser um texto.' })
  comment?: string;

  @IsBoolean({ message: 'O campo "Recomenda" deve ser verdadeiro ou falso.' })
  recommend: boolean;

  @IsEnum(CityEnum, { message: 'Cidade inválida. Selecione uma cidade válida.' })
  city: CityEnum;
}
