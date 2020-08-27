import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { AppGateway } from './app.gateway';
import { SensorValue } from '@fds/api-interfaces';

interface MqttData {
  key: string;
  value: {
    [key: string]: any
  },
  timestamp: number
}

@Controller()
export class AppController {

  private logger: Logger = new Logger('AppController');

  static toSensorValues(data: MqttData): SensorValue[]{
    return Object.keys(data.value).map(id => <SensorValue>{
      key: data.key,
      sensor: id,
      value:data.value[id],
      date: new Date(data.timestamp * 1000)
    });
  }

  constructor(private appGateway: AppGateway) {
  }

  @MessagePattern('/sensors')
  sensors(@Payload() data: MqttData, @Ctx() context: MqttContext) {
    this.logger.log(context.getTopic())
    this.appGateway.sendBroadcastMessage('sensors', AppController.toSensorValues(data));
  }
}
