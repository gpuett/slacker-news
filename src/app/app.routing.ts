import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'news',
    component:  NewsComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
