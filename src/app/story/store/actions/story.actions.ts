import { createAction, props } from '@ngrx/store';

export const loadStorys = createAction(
  '[Story] Load Storys'
);

export const loadStorysSuccess = createAction(
  '[Story] Load Storys Success',
  props<{ data: any }>()
);

export const loadStorysFailure = createAction(
  '[Story] Load Storys Failure',
  props<{ error: any }>()
);

export const changeStoryTitle = createAction(
  '[Story] Change Story Title',
  props<{ title: string }>()
);

export const save = createAction(
  '[Story] Save Story Title',
  props<{ title: string }>()
);

