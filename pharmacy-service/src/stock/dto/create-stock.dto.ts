import { IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';

export class CreateStockDto {
  @IsUUID()
  medicationId: string;

  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  batchNumber?: string;

  @IsOptional()
  @IsString()
  warehouse?: string;

  @IsOptional()
  @IsString()
  expiry?: string; // ISO date
}
