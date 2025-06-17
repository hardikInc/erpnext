import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medication } from './entities/medication.entity';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Injectable()
export class MedicationService {
  constructor(
    @InjectRepository(Medication)
    private meds: Repository<Medication>,
  ) {}

  create(dto: CreateMedicationDto) {
    const med = this.meds.create(dto);
    return this.meds.save(med);
  }

  findAll() {
    return this.meds.find();
  }
}
