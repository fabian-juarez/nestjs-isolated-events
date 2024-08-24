import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceCDependency1 {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventC1', {
      message: 'ServiceC Dependency 1 executed',
    });
  }
}
