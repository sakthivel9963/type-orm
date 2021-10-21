import { NextFunction, Request, Response, Router } from 'express';
import { createQueryBuilder, getCustomRepository } from 'typeorm';
import { Profile, User } from '../entity';

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
				.leftJoinAndSelect('user.blog', 'blog')
				.getMany();

			res.send(oneToMany);
		} catch (error) {
			next(error);
		}
	}
);

export default userRouter;
