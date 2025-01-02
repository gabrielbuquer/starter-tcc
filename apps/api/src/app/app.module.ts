import { Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from '../utils/dist';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { workspaceRoot } from '@nx/devkit';

import { join } from 'path';

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: false, dir: join(workspaceRoot, 'apps/starter-tcc'), }), { basePath: join(workspaceRoot, 'apps/starter-tcc'), viewsDir: null })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
