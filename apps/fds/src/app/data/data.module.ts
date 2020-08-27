import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SocketIoModule } from 'ngx-socket-io';


@NgModule({
  declarations: [],
  imports: [
    SocketIoModule.forRoot({
      url: 'http://localhost:6006'
    }),
  ],
  providers: [
    DataService
  ]
})
export class DataModule {
}
