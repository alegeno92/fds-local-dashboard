import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { filter, tap } from 'rxjs/operators';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { ActuatorCollectionService } from '@fds/data-access/actuator';

@Injectable()
export class ActuatorRouterEffects {

  @Effect({dispatch: false})
  pageDetail$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/actuators\/list\/)([1-9]*$)$/gm).test(route.payload.routerState.url)),
    tap((route)=>{
      const id = route.payload.routerState.url.split('/')[3];
      this.actuatorCollectionService.getByKey(id);
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  pageList$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/actuators\/list)$/gm).test(route.payload.routerState.url)),
    tap(()=>{
      this.actuatorCollectionService.getAll();
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  updated$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Actuator', EntityOp.SAVE_UPDATE_ONE_SUCCESS).type),
  ), {dispatch: false});

  @Effect({dispatch: false})
  saved$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Actuator', EntityOp.SAVE_ADD_ONE_SUCCESS).type),
  ), {dispatch: false});


  constructor(private actions$: Actions,
              private eaf: EntityActionFactory,
              private actuatorCollectionService: ActuatorCollectionService,
  ) {}

}
