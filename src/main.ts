import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || 'localhost';

  app.useStaticAssets(join(__dirname, '../..', 'public'));
  app.useStaticAssets(join(__dirname, '../..', 'static'));
  app.setBaseViewsDir(join(__dirname, '../..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(port, host);
  Logger.log(`🚀 Application is running on: http://${host}:${port}/`);
}

bootstrap();
