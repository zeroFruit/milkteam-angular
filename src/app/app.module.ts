import { BrowserModule } from '@angular/platform-browser';

// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
    ],
    exports: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
