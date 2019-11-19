import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Shop
import { TopBarComponent } from './shop/top-bar/top-bar.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductAlertsComponent } from './shop/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { CartComponent } from './shop/cart/cart.component';

// Hero
import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
// Message
import { MessagesComponent } from './messages/messages.component';
// dashboard
import { DashBoardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    //shop
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    // hero
    HeroesComponent,
    HeroDetailComponent,
    // Message
    MessagesComponent,
    // dashboard
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      // Shop
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      // Hero
      { path: 'hero', component: HeroesComponent },
      { path: 'hero/:heroId', component: HeroDetailComponent },
      // message
      { path: 'message', component: MessagesComponent },
      // dashboard
      { path: 'dashboard', component: DashBoardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
