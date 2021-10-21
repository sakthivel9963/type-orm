import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	Generated,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	Timestamp,
	UpdateDateColumn,
} from 'typeorm';
import { User } from '.';

@Entity()
export class Profile extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Generated('uuid')
	uuid: string;

	@Column()
	firstName: string;

	@Column({ nullable: true })
	lastName: string;

	@Column({ nullable: true })
	avatar: string;

	@OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
	@JoinColumn()
	user: User;

	// default column for all the entity file
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
