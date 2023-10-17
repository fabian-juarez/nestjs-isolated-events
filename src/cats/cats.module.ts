import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TestService } from './test.services';

@Module({
  controllers: [CatsController],
  providers: [CatsService, TestService],
  exports: [CatsService], // in this way when another module imports CatsModule, CatsService is available to use
})
export class CatsModule {
  constructor(private testService: TestService) {}
}
