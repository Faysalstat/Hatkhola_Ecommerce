import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMenuComponent } from './home-menu/home-menu.component';
// import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HomeMenuComponent],
  imports: [
    CommonModule,
    // MatMenuModule

  ],
  exports: [HomeMenuComponent]
})
export class ComponentsModule { }
