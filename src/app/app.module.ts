// Import Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { YoutubePlayerModule } from 'ng2-youtube-player';

// Import Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BattleVideoComponent } from './battle-video/battle-video.component';
import { BattleChatingComponent } from './battle-video/battle-chating/battle-chating.component';
import { BattleChatMessageComponent } from './battle-video/battle-chating/battle-chat-message/battle-chat-message.component';
import { RandomVideoComponent } from './random-video/random-video.component';
import { VideoComponent } from './video/video.component';
import { CustomcardComponent } from './customcard/customcard.component';
import { RandomInfoComponent } from "./random-video/random-info/random-info.component";
import { RandomChattingComponent } from "./random-video/random-chatting/random-chatting.component";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { JoinComponent } from "./auth/join/join.component";
import { FindPwComponent } from "./auth/find-pw/find-pw.component";
import { UploadComponent } from './upload/upload.component';
import { ChampionComponent } from './champion/champion.component';
import { MypageComponent } from './mypage/mypage.component';
import { HistoryComponent } from './history/./history.component';

// Import Services
import { APP_CONFIG, OPAQUE_TOKEN } from './app.config';
import { RandomVideoService } from "./random-video/random-video.service";
import { AuthService } from "./auth/auth.service";

// Import Pipe
import { ChampionPipe } from './champion/champion.pipe';

// 동균이 추가 모듈
import { UploadService } from "./upload/upload.service";

@NgModule({
  imports     : [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
    RouterModule.forRoot([
      {
        path     : 'main',
        component: RandomVideoComponent
      }, {
        path     : 'battle',
        component: BattleVideoComponent
      }, {
        path     : 'video',
        component: VideoComponent
      }, {
        path     : 'filter',
        component: CustomcardComponent
      }, {
        path     : '',
        component: RandomVideoComponent
      }, {
        path     : 'auth',
        component: AuthComponent
      }, {
        path     : 'upload',
        component: UploadComponent
      }, {
        path     : 'mypage',
        component: MypageComponent
      }, {
        path     : 'history',
        component: HistoryComponent
      }
    ])
  ],
  providers   : [
    {provide: OPAQUE_TOKEN, useValue: APP_CONFIG},
    RandomVideoService,
    AuthService,
    UploadService
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
    RandomChattingComponent,
    CustomcardComponent,
    ChampionComponent,
    ChampionPipe,
    // Mypage
    MypageComponent,
    //Auth
    AuthComponent,
    LoginComponent,
    JoinComponent,
    FindPwComponent,
    //Upload
    UploadComponent,
    // History
    HistoryComponent
  ],
  exports     : [
    AppComponent,
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
