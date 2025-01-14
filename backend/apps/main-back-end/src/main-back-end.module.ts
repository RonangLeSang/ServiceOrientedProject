import { Module } from '@nestjs/common';
import { MainBackEndController } from './main-back-end.controller';
import { MainBackEndService } from './main-back-end.service';

@Module({
  imports: [],
  controllers: [MainBackEndController],
  providers: [MainBackEndService],
})
export class MainBackEndModule {}
