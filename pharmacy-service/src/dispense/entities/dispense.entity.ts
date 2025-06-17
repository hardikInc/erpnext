import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Medication } from '../../medication/entities/medication.entity';

@Entity()
export class Dispense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Medication, { eager: true })
  medication: Medication;

  @Column()
  patientId: string; // reference to Patient resource (e.g., via Medplum)

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
