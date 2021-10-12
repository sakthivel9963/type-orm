import { NextFunction, Request, Response } from 'express';
import HttpException from './httpException';
import { logger } from './winston';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line no-console
  console.error(error);
  const { message, stack } = error;
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  logger.error(
    `${req._startTime} - ${req._remoteAddress} - ${status} - ${req.originalUrl} - ${message} - ${stack} `
  );
  res.status(status).json({
    message,
    status,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : stack,
  });
};
