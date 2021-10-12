import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/ping', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

export default router;
