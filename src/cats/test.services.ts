import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
  hello(): string {
    return 'hello world using DI in module';
  }

  testParams(
    { minutes = 1}: {minutes?: number} = {}
  ): any {
    return minutes;
  }
}
