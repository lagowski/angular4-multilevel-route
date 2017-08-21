import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignComponent } from './sign/sign.component';
import { SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    SignComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
