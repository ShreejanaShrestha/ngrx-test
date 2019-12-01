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


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  title;
  storyForm: FormGroup;

  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.storyForm = this.fb.group({
      title: ['']
    })
  }

  ngOnInit() {

    this.store.select(StorySelectors.selectStoryState).subscribe(title => {
      this.title = title;
    });
    console.log(this.title);

  }

  changeTitle(title: string) {
    console.log('clicked to change')
    this.store.dispatch(fromAction.changeStoryTitle({ title }))
  }

  /**
   * Submit the form
   */
  onSubmit(value) {
    // if (valid) {
    console.log(value)
    const title = value;

    // dispatch new action
    this.store.dispatch(fromAction.save({ title }));
    // this.storyForm.reset();
    // }
  }

}
