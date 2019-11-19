import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shop/top-bar/top-bar.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductAlertsComponent } from './shop/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { CartComponent } from './shop/cart/cart.component';

import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'hero', component: HeroesComponent },
      { path: 'hero/:heroId', component: HeroDetailComponent },
      { path: 'message', component: MessagesComponent },
      { path: 'dashboard', component: DashBoardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
