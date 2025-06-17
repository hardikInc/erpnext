import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispense } from './entities/dispense.entity';
import { DispenseService } from './dispense.service';
import { DispenseController } from './dispense.controller';
import { Medication } from '../medication/entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dispense, Medication])],
  providers: [DispenseService],
  controllers: [DispenseController],
})
export class DispenseModule {}
