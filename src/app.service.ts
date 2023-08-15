import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, I am Toto!';
  }

  getTest(): string {
    return 'TITI';
  }
}
