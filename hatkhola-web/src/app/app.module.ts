import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { DashModule } from './dash/dash.module';
import { EcomModule } from './ecom/ecom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/service-api/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcomModule,
    DashModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [HomeMenuComponent, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
