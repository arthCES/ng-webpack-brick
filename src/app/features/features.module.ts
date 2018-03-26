import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentOneComponent],
  exports: [ComponentOneComponent]
})
export class FeaturesModule { }
