import { NestFactory } from '@nestjs/core';

import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as dotEnv from 'dotenv-safe';
import * as express from 'express';
import * as helmet from 'helmet';

import { ApplicationModule } from './app.module';

dotEnv.config();

const instance = express();
instance.use(compression());
instance.use(helmet());
instance.use(cookieParser());
instance.use(cors({
    // origin: process.env.CORS_ORIGINS.split('|'),
}));

const bootstrap = async (): Promise<void> => {

    const app = await NestFactory.create(ApplicationModule, instance);

    await app.listen(3000);
};

bootstrap();
