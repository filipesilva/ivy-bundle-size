import { Component, NgModule } from '@angular/core';

@Component({ selector: 'hello-world', template: 'Hello World!' })
export class AppComponent { }

@NgModule({ declarations: [AppComponent], bootstrap: [AppComponent] })
export class AppModule { }
