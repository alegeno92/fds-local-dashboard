import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { NxModule } from '@nrwl/angular';
import { MqttModule } from 'ngx-mqtt';


const defaultDataServiceConfig = {
  root: '',
  entityHttpResourceUrls: {
    Sensor: {
      collectionResourceUrl: `/api/sensors`,
      entityResourceUrl: `/api/sensors/`
    },
    Actuator: {
      collectionResourceUrl: `/api/actuators`,
      entityResourceUrl: `/api/actuators/`
    },
    Configuration: {
      collectionResourceUrl: `/api/configurations`,
      entityResourceUrl: `/api/configurations/`
    }
  }
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer
    }),
    MqttModule.forRoot({
      port: 9001,
      hostname: "",
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot([
        {
          path:'',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: 'sensors',
          loadChildren: () => import('./sensors/sensors.module').then(m => m.SensorsModule)
        },
        {
          path: 'actuators',
          loadChildren: () => import('./actuators/actuators.module').then(m => m.ActuatorsModule)
        },
        {
          path: 'configurations',
          loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationsModule)
        },
        {
          path: 'exports',
          loadChildren: () => import('./exports/exports.module').then(m => m.ExportsModule)
        },
        {
          path:'**',
          redirectTo: ''
        }
      ],
      {
        useHash: true,
        enableTracing: false,
        initialNavigation: 'enabled'
      }),
    UiModule
  ],
  providers:[
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
