import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RouteComponent } from './route/route.component';
// import { ComponentProductsComponent } from './component-products/component-products.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';
import { Details2Component } from './details2/details2.component';

@NgModule({
  declarations: [
    AppComponent,
    // RouteComponent,
    // ComponentProductsComponent,
    ProductsComponent,
    ReviewsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    AuthorComponent,
    AllComponent,
    Details2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
