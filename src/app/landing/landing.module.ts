import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../_helper/filter.pipe';
@NgModule({
  declarations: [LandingComponent, FilterPipe],
  imports: [CommonModule, LandingRoutingModule, FormsModule],
})
export class LandingModule {}
