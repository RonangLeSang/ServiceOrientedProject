import { Controller, Get } from '@nestjs/common';
import { MainBackEndService } from './main-back-end.service';

@Controller()
export class MainBackEndController {
  constructor(private readonly mainBackEndService: MainBackEndService) {}

  @Get()
  getHello(): string {
    return this.mainBackEndService.getHello();
  }
}
