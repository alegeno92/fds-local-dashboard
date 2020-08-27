import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(6006)
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');

  private clients: { [id: string]: Socket } = {};

  @SubscribeMessage('sensors')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  afterInit(server: Server): any {
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.clients[client.id] = client;
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  sendMessage(client: string, topic: string, data: object) {
    if(this.clients[client]){
      this.clients[client].emit(topic, data)
    }
  }

  sendBroadcastMessage(topic: string, data: object) {
    Object.values(this.clients).forEach(client => client.emit(topic, data));
  }

}
