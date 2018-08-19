import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoaldRoutingModule } from './goald-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, GoaldRoutingModule],
  exports: [],
  providers: [],
})
export class GoaldModule {}
