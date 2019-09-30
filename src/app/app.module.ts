import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NickNameFormModule } from './components/nickname-form/nickname-form.module';

@NgModule({
  imports: [BrowserModule, NickNameFormModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
