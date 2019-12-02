import { createAction, props } from '@ngrx/store';
import { Language } from '../../models/language.model';

export const loadLanguages = createAction(
  '[Language] Load Languages'
);

export const loadLanguagesSuccess = createAction(
  '[Language] Load Languages Success',
  props<{ data: Language[] }>()
);

export const loadLanguagesFailure = createAction(
  '[Language] Load Languages Failure',
  props<{ error: any }>()
);
