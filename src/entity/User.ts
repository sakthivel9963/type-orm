import { Column, Entity } from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('user')
export class User extends CommonEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  age: number;
}
