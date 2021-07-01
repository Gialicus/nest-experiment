import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const option = new DocumentBuilder()
    .setTitle('Heroes')
    .setDescription('Hero service')
    .setVersion('1.0')
    .addTag('heroes')
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.EXTERNAL_PORT || 3000);
}
bootstrap();
