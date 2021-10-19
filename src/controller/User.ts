import { NextFunction, Request, Response, Router } from 'express';
import { UserRepository } from '../repository';
import { getCustomRepository } from 'typeorm';

const userRouter: Router = Router();

userRouter.get(
	'/user',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userRepository = getCustomRepository(UserRepository);
			const user = userRepository.create(); // same as const user = new User();
			user.firstName = 'Timber';
			user.lastName = 'Saw';
			const result = await userRepository.save(user);
			res.send({
				message: 'success',
				id: result.id,
			});
		} catch (error) {
			next(error);
		}
	},
);

export default userRouter;
