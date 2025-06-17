import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Medication } from '../../medication/entities/medication.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Medication, { eager: true })
  medication: Medication;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  batchNumber?: string;

  @Column({ nullable: true })
  warehouse?: string;

  @Column({ type: 'date', nullable: true })
  expiry?: string;
}
