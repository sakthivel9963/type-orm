import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  created_by: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @Column({ nullable: true })
  updated_by: number;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @Column({ nullable: true })
  deleted_by: number;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
