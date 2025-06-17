import { Controller, Post, Body, Get } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Controller('medications')
export class MedicationController {
  constructor(private readonly service: MedicationService) {}

  @Post()
  create(@Body() dto: CreateMedicationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
