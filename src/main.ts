import { NestFactory } from '@nestjs/core';
import { CompanyModule } from './company/company.module';

async function bootstrap() {
  const app = await NestFactory.create(CompanyModule);
  await app.listen(4000);
}
bootstrap();
