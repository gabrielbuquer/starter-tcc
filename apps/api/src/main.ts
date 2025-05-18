/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import Next from 'next';
import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const isDev = process.env.NODE_ENV !== 'production';
  console.log(join(workspaceRoot, 'apps/starter-tcc'));
  const nextApp = Next({
    dev: isDev,
    dir: join(workspaceRoot, 'apps/starter-tcc'),
  });
  const handle = nextApp.getRequestHandler();
  const port = process.env.PORT || 3000;

  await nextApp.prepare();

  const config = new DocumentBuilder()
    .setTitle('Api Monetix')
    .setDescription('Api for Monetix project')
    .setVersion('1.0')
    .build();

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

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/`);
}

bootstrap();
