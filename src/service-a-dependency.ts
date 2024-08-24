// src/service-a-dependency.ts
import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class ServiceADependency {
  execute() {
    const context = EventService.getContext();
    context.accumulateEvent('EventA1', {
      message: 'ServiceA Dependency executed',
    });
  }
}
