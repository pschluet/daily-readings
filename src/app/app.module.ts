import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SentenceCasePipe } from './sentence-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentenceCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ TitleCasePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
