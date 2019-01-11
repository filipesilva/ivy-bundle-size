import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({ selector: 'hello-world', template: 'Hello World!' })
export class AppComponent { }

@NgModule({ declarations: [AppComponent], imports: [BrowserModule], bootstrap: [AppComponent] })
export class AppModule { }
