import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SensorValue } from '@fds/api-interfaces';


@Injectable()
export class DataService {

  sensorData$ = this.socket.fromEvent<SensorValue[]>('sensors')

  constructor(private socket: Socket) {
    this.socket.connect()
  }
}
