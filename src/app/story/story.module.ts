import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoryEffects } from './store/effects/story.effects';
import { StoreModule } from '@ngrx/store';
import * as fromStory from './store/reducers/story.reducer';
import * as fromLanguage from './store/reducers/language.reducer';

import { FairytaleComponent } from './components/fairytale/fairytale.component';
import { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageComponent } from './components/language/language.component';
import { LanguageEffects } from './store/effects/language.effects';


const routes: Routes = [
  { path: 'story', component: StoryComponent }
]
@NgModule({
  declarations: [
    FairytaleComponent,
    StoryComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('story', fromStory.reducer),
    StoreModule.forFeature('language', fromLanguage.reducer),

    EffectsModule.forFeature([StoryEffects, LanguageEffects]),
    RouterModule.forChild(routes)
  ]
})
export class StoryModule { }
