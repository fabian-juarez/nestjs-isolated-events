import { Injectable } from '@nestjs/common';
import { ServiceADependency } from './service-a-dependency';
import { EventService } from './event.service';

@Injectable()
export class ServiceA {
  constructor(private readonly serviceADependency: ServiceADependency) {}

  exec() {
    EventService.runInContext(() => {
      this.serviceADependency.execute();
      EventService.getContext().emitAccumulatedEvents();
    });
  }
}
