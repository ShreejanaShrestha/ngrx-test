import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLanguage from '../reducers/language.reducer';

export const selectStoryLanguageState = createFeatureSelector<fromLanguage.languageState>(
  fromLanguage.languageFeatureKey
);
