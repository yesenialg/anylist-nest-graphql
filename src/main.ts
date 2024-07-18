import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, }));
  const port = 3000;

  await app.listen(port);
  console.log(`Disponible en http://localhost:${port}/graphql`)
}
bootstrap();
