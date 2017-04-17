import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { SeasonDirective } from './directives/season.directive';
import { BlendPipe } from './pipes/blend.pipe';
import { BannerInlineComponent } from './components/banner-inline/banner-inline.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    SeasonDirective,
    BlendPipe,
    BannerInlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
