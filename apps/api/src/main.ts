/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import Next from 'next';
import { workspaceRoot } from '@nx/devkit';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const isDev = process.env.NODE_ENV !== 'production';
  console.log(join(workspaceRoot, 'apps/starter-tcc'))
  const nextApp = Next({ dev: isDev, dir: join(workspaceRoot, 'apps/starter-tcc') });
  const handle = nextApp.getRequestHandler();
  const port = process.env.PORT || 3000;

  await nextApp.prepare();

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    try {
    if (req.url.startsWith('/api')) {
      // Let NestJS handle API requests
      next();
    } else {
      // Let Next.js handle everything else
      await handle(req, res);
    }
  } catch (error) {

    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
  });

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
