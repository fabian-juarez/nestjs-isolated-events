// src/event.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

class EventContext {
  private eventsToEmit: { eventName: string; payload: any }[] = [];

  accumulateEvent(eventName: string, payload: any) {
    console.log('acumulando evento ', eventName);
    this.eventsToEmit.push({ eventName, payload });

    console.log('Elementos en la pila: ', this.eventsToEmit.length);
  }

  emitAccumulatedEvents() {
    for (const event of this.eventsToEmit) {
      Logger.log(
        `Emitting event: ${event.eventName} with payload: ${JSON.stringify(
          event.payload,
        )}`,
      );
    }
    this.eventsToEmit = [];
  }
}

@Injectable()
export class EventService {
  private static asyncLocalStorage = new AsyncLocalStorage<EventContext>();

  static runInContext<T>(fn: () => T): T {
    const context = new EventContext();
    return this.asyncLocalStorage.run(context, fn);
  }

  static getContext(): EventContext {
    const context = this.asyncLocalStorage.getStore();
    if (!context) {
      throw new Error(
        'EventContext not found. Make sure to runInContext() before using it.',
      );
    }
    return context;
  }
}
