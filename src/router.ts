import express, { NextFunction, Request, Response, Router } from 'express';
import * as controller from './controller';

const router: Router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
	res.json({
		status: 200,
		message: 'Success',
	});
});

const controllerArrayValue = Object.values(controller);

router.use(controllerArrayValue);

export default router;
