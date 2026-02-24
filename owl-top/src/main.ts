import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS
  app.enableCors({
    origin: 'https://react-production-7245.up.railway.app',
    credentials: true,
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('OWLTop API')
    .setDescription('API для курсов')
    .setVersion('1.0')
    .build();

  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // PORT
  const port = process.env.PORT ?? 3003;
  await app.listen(port);

  console.log(`🚀 Server running on: https://react-production-7245.up.railway.app${port}`);
  console.log(`📚 Swagger UI: http://localhost:${port}/api`);
}
bootstrap();
