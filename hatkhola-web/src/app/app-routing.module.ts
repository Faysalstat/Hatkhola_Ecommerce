import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashModule } from './dash/dash.module';
import { EcomModule } from './ecom/ecom.module';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'dash', redirectTo: '/dash', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
