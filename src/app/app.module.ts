import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentsComponent } from './text-components/text-components.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { EmploInfoComponent } from './emplo-info/emplo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentsComponent,
    ImageComponentComponent,
    EmploInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
