import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: 'Content-Type, Accept',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
  await app.get(MikroORM).getSchemaGenerator().updateSchema();
  await app.listen(3001);
}
bootstrap();
