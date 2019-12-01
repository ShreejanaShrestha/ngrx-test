import { Action, createReducer, on } from '@ngrx/store';
import * as StoryActions from '../actions/story.actions';

export const storyFeatureKey = 'story';

export interface State {
  title;

}

export const initialState: State = {
  title: ['snowman', 'seven elves']
};

const storyReducer = createReducer(
  initialState,

  on(StoryActions.loadStorys, state => state),
  on(StoryActions.loadStorysSuccess, (state, action) => state),
  on(StoryActions.loadStorysFailure, (state, action) => state),
  on(StoryActions.changeStoryTitle, (state, { title }) => ({
    title: [title]
  })),
  on(StoryActions.save, (state, { title }) => ({
    title: [...state.title, title]
  }))


);

export function reducer(state: State | undefined, action: Action) {
  return storyReducer(state, action);
}
