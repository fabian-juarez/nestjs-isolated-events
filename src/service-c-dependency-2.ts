import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceCDependency2 {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventC2', {
      message: 'ServiceC Dependency 2 executed',
    });
  }
}
