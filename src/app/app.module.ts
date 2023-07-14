import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
