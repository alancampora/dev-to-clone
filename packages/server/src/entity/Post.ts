import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@ManyToOne(type => User)
	user: User;

	@Column()
	title: string;

	@Column()
	body: string;
}
