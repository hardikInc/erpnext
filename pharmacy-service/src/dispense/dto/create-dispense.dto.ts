import { IsUUID, IsNumber, IsString } from 'class-validator';

export class CreateDispenseDto {
  @IsUUID()
  medicationId: string;

  @IsString()
  patientId: string;

  @IsNumber()
  quantity: number;
}
