import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

// 유튜브모듈
import { YoutubePlayerModule } from 'ng2-youtube-player';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BattleVideoComponent } from './battle-video/battle-video.component';
import { BattleChatingComponent } from './battle-video/battle-chating/battle-chating.component';
import { BattleChatMessageComponent } from './battle-video/battle-chating/battle-chat-message/battle-chat-message.component';
import { RandomVideoComponent } from './random-video/random-video.component';
import { VideoComponent } from './video/video.component';
import { RandomInfoComponent } from "./random-video/random-info/random-info.component";
import { RandomChattingComponent } from "./random-video/random-chatting/random-chatting.component";

@NgModule({
  imports     : [
    BrowserModule,
    YoutubePlayerModule,
    RouterModule.forRoot([
      {
        path: 'main',
        component: RandomVideoComponent
      }, {
        path: 'battle',
        component: BattleChatingComponent
      }, {
        path: 'video',
        component: VideoComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    NavComponent,
    VideoComponent,
    BattleVideoComponent,
    BattleChatingComponent,
    BattleChatMessageComponent,
    RandomVideoComponent,
    RandomInfoComponent,
    RandomChattingComponent
  ],
  exports     : [
    AppComponent,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
