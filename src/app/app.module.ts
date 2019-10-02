import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BuildingFormModule } from './components/building-form/building-form.module';

@NgModule({
  imports: [BrowserModule, BuildingFormModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
