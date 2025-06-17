import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispense } from './entities/dispense.entity';
import { Medication } from '../medication/entities/medication.entity';
import { CreateDispenseDto } from './dto/create-dispense.dto';

@Injectable()
export class DispenseService {
  constructor(
    @InjectRepository(Dispense)
    private dispenses: Repository<Dispense>,
    @InjectRepository(Medication)
    private meds: Repository<Medication>,
  ) {}

  async create(dto: CreateDispenseDto) {
    const medication = await this.meds.findOneBy({ id: dto.medicationId });
    const dispense = this.dispenses.create({
      medication,
      patientId: dto.patientId,
      quantity: dto.quantity,
    });
    return this.dispenses.save(dispense);
  }

  findAllForPatient(patientId: string) {
    return this.dispenses.find({ where: { patientId } });
  }
}
