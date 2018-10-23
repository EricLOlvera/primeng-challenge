import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as ItemActions from '../actions/item.actions';

@Injectable()
export class ItemEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

    @Effect()
    loadRequestEffect$: Observable<ItemActions.Actions> = this.actions$
    .pipe(
        ofType(ItemActions.ActionTypes.LOAD_REQUEST),
        startWith(new ItemActions.LoadRequest()),
        switchMap( action => this.dataService.getItems$()),
        map( items => {
            console.log({ items });
            return new ItemActions.LoadSuccess( {items} );
        }),
        catchError( error =>  observableOf(new ItemActions.LoadFailure( { error })))
    );
}
