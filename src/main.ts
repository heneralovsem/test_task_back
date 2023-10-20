import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as path from 'path'



async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)
    // app.useStaticAssets(path.resolve(__dirname, '..', 'static'))
    app.enableCors()
    const config = new DocumentBuilder()
    .setTitle('Buildings API')
    .setDescription('REST API Docs')
    .setVersion('1.0.0')
    .addTag('some tag')
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()