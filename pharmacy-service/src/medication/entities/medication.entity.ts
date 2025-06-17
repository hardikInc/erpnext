import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// FHIR Medication resource (simplified)
@Entity()
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string; // medication code or identifier

  @Column()
  name: string;

  @Column({ nullable: true })
  form?: string;

  @Column({ nullable: true })
  manufacturer?: string;
}
