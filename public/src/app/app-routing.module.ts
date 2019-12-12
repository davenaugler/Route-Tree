import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { Details2Component } from './details2/details2.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
      { path: 'details/:id', component: DetailsComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewsComponent, children: [
      { path: 'details2/:id', component: Details2Component },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
