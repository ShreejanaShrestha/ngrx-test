import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LanguageActions from '../actions/language.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { StoryService } from '../../services/story.service';
import { of } from 'rxjs';


@Injectable()
export class LanguageEffects {

  loadLanguages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LanguageActions.loadLanguages),
      mergeMap(() => this.storyService.getData()
        .pipe(
          map(data => (LanguageActions.loadLanguagesSuccess({ data }))),
          catchError(error => of(LanguageActions.loadLanguagesFailure({ error })))
        ))
    );

  });

  constructor(private actions$: Actions, private storyService: StoryService) { }

}
