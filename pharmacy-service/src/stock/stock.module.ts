import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from './entities/stock.entity';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { Medication } from '../medication/entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stock, Medication])],
  providers: [StockService],
  controllers: [StockController],
})
export class StockModule {}
