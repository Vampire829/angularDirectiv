import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { HailaterDirectiv } from './directiv/hailater.directiv';

@NgModule({
  declarations: [
    AppComponent,
    HailaterDirectiv,
  ],
  imports: [
    BrowserModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
