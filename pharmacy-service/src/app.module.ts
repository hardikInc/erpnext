import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicationModule } from './medication/medication.module';
import { StockModule } from './stock/stock.module';
import { DispenseModule } from './dispense/dispense.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'pharmacy',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MedicationModule,
    StockModule,
    DispenseModule,
  ],
})
export class AppModule {}
