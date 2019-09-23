import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
