import { Injectable } from '@nestjs/common';
import { ServiceCDependency1 } from './service-c-dependency-1';
import { ServiceCDependency2 } from './service-c-dependency-2';
import { ServiceCDependency3 } from './service-c-dependency-3';
import { EventService } from './event.service';

@Injectable()
export class ServiceC {
  constructor(
    private readonly serviceCDep1: ServiceCDependency1,
    private readonly serviceCDep2: ServiceCDependency2,
    private readonly serviceCDep3: ServiceCDependency3,
  ) {}

  exec() {
    EventService.runInContext(() => {
      this.serviceCDep1.execute();
      this.serviceCDep2.execute();
      this.serviceCDep3.execute();
      EventService.getContext().emitAccumulatedEvents(); // commit
    });
  }
}
