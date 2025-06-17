import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { DispenseService } from './dispense.service';
import { CreateDispenseDto } from './dto/create-dispense.dto';

@Controller('dispense')
export class DispenseController {
  constructor(private readonly service: DispenseService) {}

  @Post()
  create(@Body() dto: CreateDispenseDto) {
    return this.service.create(dto);
  }

  @Get()
  find(@Query('patient_id') patientId: string) {
    return this.service.findAllForPatient(patientId);
  }
}
