import express, { NextFunction, Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from './repository';

const router: Router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRepository = getCustomRepository(UserRepository);
    const user = userRepository.create(); // same as const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    await userRepository.save(user);
  } catch (error) {
    next(error);
  }
});

export default router;
