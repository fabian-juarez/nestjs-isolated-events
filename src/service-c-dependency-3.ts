import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceCDependency3 {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventC3', {
      message: 'ServiceC Dependency 3 executed',
    });
  }
}
