import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getX() {
    return 'xxxxxxxxxxxxxxxx';
  }
}
