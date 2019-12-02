import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAction from '../story/store/actions/story.actions';
import * as StorySelectors from './store/selectors/story.selectors';
import * as StoryLanguageSelectors from './store/selectors/language.selectors';

import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { StoryService } from './services/story.service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StoryComponent implements OnInit {
  title: Observable<any>;
  language: Observable<any>;
  storyForm: FormGroup;

  constructor(private store: Store<any>, private fb: FormBuilder, private storyService: StoryService) {
    this.storyForm = this.fb.group({
      title: ['']
    })
  }

  ngOnInit() {
    this.storyService.getData().subscribe((data) => console.log(data))

    this.title = this.store.select(StorySelectors.selectStoryState);
    this.language = this.store.select(StoryLanguageSelectors.selectStoryLanguageState);

  }

  changeTitle(title: string) {
    console.log('clicked to change')
    this.store.dispatch(fromAction.changeStoryTitle({ title }))
  }

  /**
   * Submit the form
   */
  onSubmit() {
    // if (valid) {
    console.log(this.storyForm.get('title').value)
    const title = this.storyForm.get('title').value;

    // dispatch new action
    this.store.dispatch(fromAction.save({ title }));
    this.storyForm.reset();
    // }
  }

}
