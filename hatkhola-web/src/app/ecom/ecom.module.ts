import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EcomRoutingModule } from './ecom-routing.module';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    OrderComponent,
    CartComponent,
    CheckoutComponent,
    MyorderComponent,
    ViewproductComponent],
  imports: [
    CommonModule,
    EcomRoutingModule,
    ComponentsModule
  ]
})
export class EcomModule { }
