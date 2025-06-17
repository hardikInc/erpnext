import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { Medication } from '../medication/entities/medication.entity';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stocks: Repository<Stock>,
    @InjectRepository(Medication)
    private meds: Repository<Medication>,
  ) {}

  async create(dto: CreateStockDto) {
    const medication = await this.meds.findOneBy({ id: dto.medicationId });
    const stock = this.stocks.create({
      medication,
      quantity: dto.quantity,
      batchNumber: dto.batchNumber,
      warehouse: dto.warehouse,
      expiry: dto.expiry,
    });
    return this.stocks.save(stock);
  }

  findAll() {
    return this.stocks.find();
  }
}
