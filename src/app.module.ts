import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ServiceA } from './service-a.service';
import { ServiceADependency } from './service-a-dependency';
import { ServiceB } from './service-b.service';
import { ServiceBDependency1 } from './service-b-dependency-1';
import { ServiceBDependency2 } from './service-b-dependency-2';
import { ServiceC } from './service-c.service';
import { ServiceCDependency1 } from './service-c-dependency-1';
import { ServiceCDependency2 } from './service-c-dependency-2';
import { ServiceCDependency3 } from './service-c-dependency-3';
import { EventService } from './event.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ServiceA,
    ServiceADependency,
    ServiceB,
    ServiceBDependency1,
    ServiceBDependency2,
    ServiceC,
    ServiceCDependency1,
    ServiceCDependency2,
    ServiceCDependency3,
    EventService,
  ],
})
export class AppModule {}
