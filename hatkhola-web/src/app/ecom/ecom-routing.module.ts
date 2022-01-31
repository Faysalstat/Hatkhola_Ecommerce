import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ShopComponent } from './shop/shop.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
    {
        path: 'home',
        children: [
            { path: '', component: HomeComponent },
            { path: 'cart', component: CartComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'myorder', component: MyorderComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'view-product', component: ViewproductComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EcomRoutingModule { }