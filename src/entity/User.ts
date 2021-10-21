import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	Generated,
	OneToMany,
	OneToOne,
	PrimaryColumn,
	PrimaryGeneratedColumn,
	Timestamp,
	UpdateDateColumn,
} from 'typeorm';
import { Blog, Profile } from '.';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@Generated('uuid')
	uuid: string;

	@Column({ unique: true })
	userName: string;

	@Column({ select: false })
	password: string;

	@OneToOne(() => Profile, (profile) => profile.user)
	profile: Profile;

	@OneToMany(() => Blog, (blog) => blog.user)
	blogs: Blob[];

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
