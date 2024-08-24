import { Controller, Get } from '@nestjs/common';
import { ServiceA } from './service-a.service';
import { ServiceB } from './service-b.service';
import { ServiceC } from './service-c.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serviceA: ServiceA,
    private readonly serviceB: ServiceB,
    private readonly serviceC: ServiceC,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('events')
  handleEvents() {
    console.log(
      '----------------------------------------------- ----------------------------------------------- -----------------------------------------------',
    );
    console.log('inicio ServiceA');
    this.serviceA.exec();
    console.log('fin ServiceA');
    console.log(
      '----------------------------------------------- ----------------------------------------------- -----------------------------------------------',
    );
    console.log('inicio ServiceB');
    this.serviceB.exec();
    console.log('fin ServiceB');
    console.log(
      '----------------------------------------------- ----------------------------------------------- -----------------------------------------------',
    );
    console.log('inicio ServiceC');
    this.serviceC.exec();
    console.log('fin ServiceC');
    return 'Events processed';
  }
}
