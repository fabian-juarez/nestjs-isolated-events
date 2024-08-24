import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceBDependency1 {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventB1', {
      message: 'ServiceB Dependency 1 executed',
    });
  }
}
