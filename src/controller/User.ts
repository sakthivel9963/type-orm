import { NextFunction, Request, Response, Router } from 'express';
import { UserRepository } from '../repository';
import { getCustomRepository } from 'typeorm';
import { User } from '../entity';

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

			const user = User.create({
				first_name: 'sakthivel',
				last_name: 'a',
				age: 5,
			});
			await user.save();
			res.send(user);
		} catch (error) {
			next(error);
		}
	},
);

export default userRouter;
