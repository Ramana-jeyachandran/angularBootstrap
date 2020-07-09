import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { AccordinComponent } from './accordin/accordin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PopoverComponent } from './popover/popover.component';
import { TypeheadComponent } from './typehead/typehead.component';


const routes: Routes = [
  {
    path:"modal",
    component:ModalComponent
  },
  {
    path:"accordin",
    component:AccordinComponent
  },
  {
    path:"carousel",
    component:CarouselComponent
  },
  {
    path:"popover",
    component:PopoverComponent
  },
  {
    path:"typehead",
    component:TypeheadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
