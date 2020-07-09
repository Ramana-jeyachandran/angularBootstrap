import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { PopoverComponent } from './popover/popover.component';
import { AccordinComponent } from './accordin/accordin.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarouselComponent,
    TypeheadComponent,
    PopoverComponent,
    AccordinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   NgbModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
