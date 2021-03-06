import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	Generated,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	Timestamp,
	UpdateDateColumn,
} from 'typeorm';
import { Category, User } from '.';

@Entity()
export class Blog extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Generated('uuid')
	uuid: string;

	@Column()
	title: string;

	@Column({ nullable: true })
	description: string;

	@Column({ nullable: true })
	image: string;

	@ManyToOne(() => User, (user) => user.blogs, {
		onDelete: 'CASCADE',
		nullable: false,
	})
	@JoinColumn()
	user: User;

	@ManyToMany(() => Category, (category) => category.blogs)
	@JoinTable()
	categories: Category[];

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
