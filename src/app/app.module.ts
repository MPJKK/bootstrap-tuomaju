import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { MainSidebarComponent } from './main/main-sidebar/main-sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        MainComponent,
        MainContentComponent,
        MainSidebarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
