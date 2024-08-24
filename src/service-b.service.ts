import { Injectable } from '@nestjs/common';
import { ServiceBDependency1 } from './service-b-dependency-1';
import { ServiceBDependency2 } from './service-b-dependency-2';
import { EventService } from './event.service';

@Injectable()
export class ServiceB {
  constructor(
    private readonly serviceBDep1: ServiceBDependency1,
    private readonly serviceBDep2: ServiceBDependency2,
  ) {}

  exec() {
    EventService.runInContext(() => {
      this.serviceBDep1.execute();
      this.serviceBDep2.execute();
      EventService.getContext().emitAccumulatedEvents();
    });
  }
}
