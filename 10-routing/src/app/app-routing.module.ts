import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component'; 
import { Page404Component } from './page404/page404.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductsPriceComponent } from './products-price/products-price.component';
 

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"products",component:ProductsComponent},
  {
    path:"products/:id",
    component:ProductsDetailsComponent,
    children:[
      {path:"overview",component:ProductsOverviewComponent},
      {path:"price",component:ProductsPriceComponent},
    ]
  },
  {path:"contact-us",component:ContactUsComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutUsComponent,
  ProductsComponent,ProductsDetailsComponent,ProductsOverviewComponent,
  ProductsPriceComponent,ContactUsComponent,Page404Component];
