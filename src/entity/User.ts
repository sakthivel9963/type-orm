import { Column, Entity } from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('user')
export class User extends CommonEntity {
	@Column({ nullable: true })
	first_name: string;

	@Column({ nullable: true })
	last_name: string;

	@Column({ nullable: true })
	age: number;
}
