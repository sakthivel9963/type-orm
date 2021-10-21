import { NextFunction, Request, Response, Router } from 'express';
import { createQueryBuilder, getCustomRepository } from 'typeorm';
import { Category, Profile, User } from '../entity';

const userRouter: Router = Router();

userRouter.get(
	'/user',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			// const userRepository = getCustomRepository(UserRepository);
			// const user = userRepository.create(); // same as const user = new User();
			// user.firstName = 'Timber';
			// user.lastName = 'Saw';
			// const result = await userRepository.save(user);
			// res.send({
			// 	message: 'success',
			// 	id: result.id,
			// });
			// const user = User.create({
			// 	first_name: 'sakthivel',
			// 	last_name: 'a',
			// 	age: 5,
			// });
			// await user.save();

			const user = await User.createQueryBuilder('user')
				.leftJoinAndSelect('user.profile', 'profile')
				.getMany();

			const oneToMany = await User.createQueryBuilder('user')
				.leftJoinAndSelect('user.blogs', 'blog')
				.leftJoinAndSelect('blog.categories', 'category')
				.getMany();

			const manyToMany = await Category.createQueryBuilder('category')
				.leftJoinAndSelect('category.blogs', 'blog')
				.getMany();

			res.send(user);
		} catch (error) {
			next(error);
		}
	}
);

export default userRouter;
