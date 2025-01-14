import { NestFactory } from '@nestjs/core';
import { MainBackEndModule } from './main-back-end.module';

async function bootstrap() {
  const app = await NestFactory.create(MainBackEndModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
