import { Controller, Get, Logger } from '@nestjs/common';
import { Sensor } from '@fds/api-interfaces';

@Controller()
export class SensorController {

  private logger: Logger = new Logger('SensorController');

  constructor() {
  }

  @Get('/sensors')
  getAll() {
      return [
        new Sensor('CG1')
      ]
  }

}
