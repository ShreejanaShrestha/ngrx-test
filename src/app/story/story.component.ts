import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAction from '../story/store/actions/story.actions';
import * as StorySelectors from './store/selectors/story.selectors'
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  title: Observable<any>;
  storyForm: FormGroup;

  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.storyForm = this.fb.group({
      title: ['']
    })
  }

  ngOnInit() {

    this.title = this.store.select(StorySelectors.selectStoryState);

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
