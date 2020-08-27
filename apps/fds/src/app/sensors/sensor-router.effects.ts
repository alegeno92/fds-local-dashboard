import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { filter, tap } from 'rxjs/operators';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { SensorCollectionService } from '@fds/data-access/sensor';

@Injectable()
export class SensorRouterEffects {

  @Effect({dispatch: false})
  pageDetail$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/sensors\/list\/)([1-9]*$)$/gm).test(route.payload.routerState.url)),
    tap((route)=>{
      const id = route.payload.routerState.url.split('/')[3];
      this.sensorCollectionService.getAll();
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  pageList$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/sensors\/list)$/gm).test(route.payload.routerState.url)),
    tap((route)=>{
      this.sensorCollectionService.getAll();
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  updated$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Sensor', EntityOp.SAVE_UPDATE_ONE_SUCCESS).type),
  ), {dispatch: false});

  @Effect({dispatch: false})
  saved$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Sensor', EntityOp.SAVE_ADD_ONE_SUCCESS).type),
  ), {dispatch: false});


  constructor(private actions$: Actions,
              private eaf: EntityActionFactory,
              private sensorCollectionService: SensorCollectionService,
  ) {}

}
