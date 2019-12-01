import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffects } from './store/effects/story.effects';
import { StoreModule } from '@ngrx/store';
import * as fromStory from './store/reducers/story.reducer';
import { FairytaleComponent } from './components/fairytale/fairytale.component';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'story', component: StoryComponent }
]
@NgModule({
  declarations: [
    FairytaleComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('story', fromStory.reducer),
    EffectsModule.forFeature([StoryEffects]),
    RouterModule.forChild(routes)
  ]
})
export class StoryModule { }
