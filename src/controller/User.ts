import { NextFunction, Request, Response, Router } from 'express';
import { UserRepository } from '../repository';
import { getCustomRepository } from 'typeorm';

export class UserController {
  constructor() {}

  static async save(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const userRepository = getCustomRepository(UserRepository);
      const user = userRepository.create(); // same as const user = new User();
      user.firstName = 'Timber';
      user.lastName = 'Saw';
      await userRepository.save(user);
    } catch (error) {
      next(error);
    }
  }
}
