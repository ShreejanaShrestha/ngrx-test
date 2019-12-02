import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as StoryActions from '../actions/story.actions';



@Injectable()
export class StoryEffects {

  loadStorys$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StoryActions.loadStorys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StoryActions.loadStorysSuccess({ data })),
          catchError(error => of(StoryActions.loadStorysFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) { }

}
