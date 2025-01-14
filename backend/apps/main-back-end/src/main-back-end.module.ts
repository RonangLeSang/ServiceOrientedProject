import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MainBackEndController } from './main-back-end.controller';
import { MainBackEndService } from './main-back-end.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: '/.apps/orders/.env',
    }),
    DatabaseModule,
  ],
  controllers: [MainBackEndController],
  providers: [MainBackEndService],
})
export class MainBackEndModule {}
