import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	Generated,
	ManyToMany,
	PrimaryGeneratedColumn,
	Timestamp,
	UpdateDateColumn,
} from 'typeorm';
import { Blog } from '.';

@Entity()
export class Category extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Generated('uuid')
	uuid: string;

	@Column()
	name: string;

	@ManyToMany(() => Blog, (blog) => blog.categories)
	blogs: Blog[];

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
