import { Injectable } from '@nestjs/common';

@Injectable()
export class MainBackEndService {
  getHello(): string {
    return 'Hello World!';
  }
}
