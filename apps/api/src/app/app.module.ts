import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { SensorController } from './sensor.controller';

@Module({
  imports: [],
  controllers: [AppController, SensorController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
