import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { SeasonDirective } from './directives/season.directive';
import { BlendPipe } from './pipes/blend.pipe';
import { BannerInlineComponent } from './components/banner-inline/banner-inline.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    SeasonDirective,
    BlendPipe,
    BannerInlineComponent,
    DynamicFormComponent,
    DynamicQuestionComponent
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
