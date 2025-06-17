import { IsString, IsOptional } from 'class-validator';

export class CreateMedicationDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  form?: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;
}
