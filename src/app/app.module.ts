import { BrowserModule } from '@angular/platform-browser';

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
import { VideoComponent } from './video/video.component';
import { CustomcardComponent } from './customcard/customcard.component';


@NgModule({
    imports: [
        BrowserModule, YoutubePlayerModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        BattleVideoComponent,
        BattleChatingComponent,
        BattleChatMessageComponent,
        VideoComponent,
        CustomcardComponent
    ],
    exports: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
