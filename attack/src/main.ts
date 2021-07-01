import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.EXTERNAL_PORT || 8877,
      },
    },
  );
  app.listen(
    () => console.log(
      'Microservice is listening on port 8877'
    ));
}
bootstrap();
