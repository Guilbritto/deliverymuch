import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './errors/AppError';
import {route} from './routes'
const app = express();

app.use(express.json());
app.use(route)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message
      });
    }
    
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
);

export { app };
