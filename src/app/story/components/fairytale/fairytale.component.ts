import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store/reducers/story.reducer';
import * as StorySelector from '../../store/selectors/story.selectors';
import * as fromAction from '../../store/actions/story.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-fairytale',
  templateUrl: './fairytale.component.html',
  styleUrls: ['./fairytale.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FairytaleComponent implements OnInit {
  @Input() title;
  @Input() language;
  constructor(private store: Store<fromStore.State>) {
    // store.select(StorySelector.selectStoryState).subscribe(data => {
    //   this.title = data;
    // })
  }
  ngOnInit() {
    console.log(this.title)
    console.log(this.language);
  }
  changeTitle(title: string) {
    console.log('clicked to change')
    console.log(title)
    this.store.dispatch(fromAction.changeStoryTitle({ title }))
  }


}
