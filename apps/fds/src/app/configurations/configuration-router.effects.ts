import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { filter, tap } from 'rxjs/operators';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { ConfigurationCollectionService } from '@fds/data-access/configuration';

@Injectable()
export class ConfigurationRouterEffects {

  @Effect({dispatch: false})
  pageDetail$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/configurations\/list\/)([1-9]*$)$/gm).test(route.payload.routerState.url)),
    tap((route)=>{
      const id = route.payload.routerState.url.split('/')[3];
      this.configurationCollectionService.getByKey(id);
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  pageList$ = createEffect(()=> this.actions$.pipe(
    ofType(routerNavigatedAction),
    filter(route => (/^(\/configurations\/list)$/gm).test(route.payload.routerState.url)),
    tap(()=>{
      this.configurationCollectionService.getAll();
    }),
  ), {dispatch: false});

  @Effect({dispatch: false})
  updated$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Configuration', EntityOp.SAVE_UPDATE_ONE_SUCCESS).type),
  ), {dispatch: false});

  @Effect({dispatch: false})
  saved$ = createEffect(()=> this.actions$.pipe(
    ofType(this.eaf.create('Configuration', EntityOp.SAVE_ADD_ONE_SUCCESS).type),
  ), {dispatch: false});


  constructor(private actions$: Actions,
              private eaf: EntityActionFactory,
              private configurationCollectionService: ConfigurationCollectionService,
  ) {}

}
