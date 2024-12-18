import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

// import { AppError } from './errors/AppError';
import { AppError } from '@errors/AppError';

import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';
// import './shared/container';
import '@shared/container';

const app = express();
const port = 3335;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
