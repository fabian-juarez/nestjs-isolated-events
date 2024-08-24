import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceBDependency2 {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventB2', {
      message: 'ServiceB Dependency 2 executed',
    });
  }
}
