import winston from 'winston';
import path from 'path';

const rootDir = path.join(__dirname, '../../');
const currentDate = new Date();
const formattedDate = `${
  currentDate.getMonth() + 1
}_${currentDate.getDate()}_${currentDate.getFullYear()}`;

const options = {
  infoFile: {
    level: 'info',
    filename: `${rootDir}/logs/app_info_${formattedDate}.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  errorFile: {
    level: 'error',
    filename: `${rootDir}/logs/app_error_${formattedDate}.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export const stream = {
  write: (message: string) => {
    logger.info(message);
  },
};
