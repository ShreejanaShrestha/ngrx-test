import { Action, createReducer, on } from '@ngrx/store';
import * as LanguageActions from '../actions/language.actions';
import { Language } from '../../models/language.model';


export const languageFeatureKey = 'language';

export interface languageState {
  language: Language[];
}

export const initialState: languageState = {
  language: []
};

const languageReducer = createReducer(
  initialState,
  on(LanguageActions.loadLanguages, state => state),
  on(LanguageActions.loadLanguagesFailure, (state, action) => state),
  on(LanguageActions.loadLanguagesSuccess, (state, action) => state)
);

export function reducer(state: languageState | undefined, action: Action) {
  return languageReducer(state, action);
}

export const getLanguage = (state: languageState) => state.language;
